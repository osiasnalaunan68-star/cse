import gcashQr from "./assets/payment/gcash-qr.png";
import mayaQr from "./assets/payment/maya-qr.png";
import maribankQr from "./assets/payment/maribank-qr.png";
import { doc, setDoc, arrayUnion } from "firebase/firestore";
import { db, auth } from "./firebase";

// >>> Dito palitan ang presyo / araw <<<
export const PROMO_PRICE = 50;
export const PROMO_DAYS = 30;
export const PROMO_PLAN = {
  id: "PROMO",
  kind: "promo",
  label: "All Access Promo",
  tagline: "One promo, everything unlocked. This is the only plan available right now.",
  price: PROMO_PRICE,
  days: PROMO_DAYS,
  includes: ["Full Library (all subjects & topics)", "Full Quiz (all subjects & topics)", "Full app access"],
};

export const PAYMENT_METHODS = [
  { id: "gcash", label: "GCash", qr: gcashQr },
  { id: "maya", label: "Maya", qr: mayaQr },
  { id: "maribank", label: "MariBank", qr: maribankQr },
];

const REF_CHARS = "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

export function generateReferenceCode(planId) {
  let suffix = "";
  for (let i = 0; i < 4; i++) {
    suffix += REF_CHARS[Math.floor(Math.random() * REF_CHARS.length)];
  }
  return `${planId}-${suffix}`;
}

export async function submitPendingPurchase(uid, { planId, price, method, referenceCode }) {
  const ref = doc(db, "users", uid);
  const u = auth.currentUser;

  await setDoc(
    ref,
    {
      email: (u && u.email) || "",
      displayName: (u && u.displayName) || "",
      photoURL: (u && u.photoURL) || "",
      pendingPurchases: arrayUnion({
        plan: planId,
        price,
        method,
        referenceCode,
        requestedAt: Date.now(),
      }),
    },
    { merge: true }
  );
}
