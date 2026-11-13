// true only when running `npm run dev`. Vite turns this into a literal `false`
// in production builds, so anything behind IS_DEV never ships to real users.
export const IS_DEV = import.meta.env.DEV;
