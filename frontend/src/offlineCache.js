// Downloads every quiz image + the app's own JS/CSS into the cache while online,
// so the whole app (including Logical Reasoning pictures) works offline.
import { allQuizImageUrls } from "./quizImages";

const CACHE = "cse-shell-v2";

export async function precacheOffline() {
  if (!("caches" in window) || navigator.onLine === false) return;
  try {
    const urls = new Set();
    for (const u of allQuizImageUrls()) {
      if (u && !u.startsWith("data:")) urls.add(new URL(u, location.href).href);
    }
    for (const e of performance.getEntriesByType("resource")) {
      try {
        const u = new URL(e.name);
        if (u.origin === location.origin && u.pathname.includes("/assets/")) urls.add(u.href);
      } catch (_) {}
    }
    const cache = await caches.open(CACHE);
    for (const u of urls) {
      if (await cache.match(u, { ignoreVary: true })) continue;
      try {
        const res = await fetch(u);
        if (res.ok) await cache.put(u, res);
      } catch (_) {}
    }
  } catch (_) {}
}
