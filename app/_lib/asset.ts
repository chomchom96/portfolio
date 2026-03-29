const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || "";

/** Prepend basePath to a public asset path (e.g. `/profile.jpg` → `/portfolio/profile.jpg`) */
export function asset(path: string): string {
  return `${BASE_PATH}${path}`;
}
