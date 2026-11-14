import sys, shutil
P = "frontend/src/pages/AdminPanel.jsx"
s = open(P, encoding="utf-8").read()

if "approveAllPending" in s:
    print("Already patched. Nothing changed."); sys.exit(0)

A1 = "  const rejectPending = async (u, p) => {"
A2 = '{pendingRows.length === 0 && <p className="py-8 text-center text-slate-400">No pending payments. 🎉</p>}'
for a in (A1, A2):
    if s.count(a) != 1:
        print("ANCHOR NOT FOUND (or found more than once):", a[:60]); sys.exit(1)

FUNC = r'''  // Approve every pending payment in one go. Each one still runs in its own
  // transaction (same logic as approvePending), so nothing can be granted twice.
  // Skipped for manual review: users with 2+ pendings, wrong plan, price mismatch.
  const approveAllPending = async () => {
    if (bulkBusy || busyKey || !users) return;
    const all = [];
    users.forEach((u) => (u.pendingPurchases || []).forEach((p) => all.push({ u, p })));
    const ok = [];
    const skipped = [];
    all.forEach((r) => {
      const many = (r.u.pendingPurchases || []).length > 1;
      if (many) skipped.push(r.p.referenceCode + " (2+ pendings from one user)");
      else if (r.p.plan !== PROMO_PLAN.id) skipped.push(r.p.referenceCode + " (unknown plan)");
      else if (r.p.price !== PROMO_PLAN.price) skipped.push(r.p.referenceCode + " (price mismatch)");
      else ok.push(r);
    });
    if (ok.length === 0) { alert("Nothing can be approved automatically.\n" + skipped.join("\n")); return; }
    const total = ok.reduce((n, r) => n + (Number(r.p.price) || 0), 0);
    const msg =
      "Approve " + ok.length + " pending payments (total ₱" + total + ")?\n\n" +
      "Only continue if your GCash / Maya / MariBank received about ₱" + total + " with these reference codes. Users can type fake requests." +
      (skipped.length ? "\n\nWill be SKIPPED for manual review (" + skipped.length + "):\n" + skipped.join("\n") : "") +
      "\n\nType APPROVE to continue.";
    const typed = window.prompt(msg);
    if (!typed || typed.trim().toUpperCase() !== "APPROVE") return;

    setBulkBusy(true);
    let done = 0;
    const failed = [];
    for (const { u, p } of ok) {
      try {
        const ref = doc(db, "users", u.uid);
        const res = await runTransaction(db, async (tx) => {
          const snap = await tx.get(ref);
          if (!snap.exists()) throw new Error("User document no longer exists.");
          const d = snap.data();
          const already = (d.paymentHistory || []).some((h) => h.referenceCode === p.referenceCode);
          const pending = (d.pendingPurchases || []).some((x) => x.referenceCode === p.referenceCode);
          if (already || !pending) return null;
          const now = serverNow();
          const days = PROMO_PLAN.days || 30;
          const remaining = (d.pendingPurchases || []).filter((x) => x.referenceCode !== p.referenceCode);
          const cur = getAppAccessInfo(d, now);
          const appExpiresAt = (cur.active ? cur.expiresAt : now) + days * DAY_MS;
          const appAccess = { plan: p.plan, expiresAt: appExpiresAt };
          tx.update(ref, {
            pendingPurchases: remaining,
            triageStatus: "subscribed",
            appAccess,
            paymentHistory: arrayUnion({ kind: "promo", plan: p.plan, price: p.price, method: p.method, referenceCode: p.referenceCode, approvedAt: now, days }),
            appAccessHistory: arrayUnion({ plan: p.plan, price: 0, referenceCode: p.referenceCode, method: "promo-purchase", approvedAt: now, expiresAt: appExpiresAt, days }),
          });
          return true;
        });
        if (res) done++;
      } catch (err) {
        console.warn("approveAllPending failed for", p.referenceCode, err);
        failed.push(p.referenceCode);
      }
    }
    setBulkBusy(false);
    await loadUsers();
    alert("Approved " + done + " of " + ok.length + "." +
      (failed.length ? "\nFailed (try again): " + failed.join(", ") : "") +
      (skipped.length ? "\nSkipped for manual review: " + skipped.join(", ") : ""));
  };

'''

BTN = r'''{pendingRows.length > 1 && (
            <button onClick={approveAllPending} disabled={bulkBusy || !!busyKey} className={btnGreen}>
              {bulkBusy ? "Approving…" : "✅ Approve all (" + pendingRows.length + ")"}
            </button>
          )}
          ''' + A2

shutil.copy(P, P + ".bak")
s = s.replace(A1, FUNC + A1, 1).replace(A2, BTN, 1)
open(P, "w", encoding="utf-8").write(s)
print("Done. Backup saved as AdminPanel.jsx.bak")
