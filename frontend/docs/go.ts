// Copyright 2024 the JSR authors. All rights reserved. MIT license.
// The links in this file are /go/:id links, which act as stable redirects to
// a page in the docs.

const staticRedirects = new Map([
  ["moderator", "https://forms.gle/MWLEi7Qj4cjvXoLb8"],
  [
    "meetings",
    "https://calendar.google.com/calendar/u/0/embed?src=c_f678f0a1d6579ed92b162f756e928294efe657ba79d90bd864d048f0e2f70669@group.calendar.google.com",
  ],
  ["use", "/docs/using-packages"],
  ["publish", "/docs/publishing-packages"],
  ["deno", "/docs/with/deno"],
  ["node", "/docs/with/node"],
  ["cfw", "/docs/with/cloudflare-workers"],
  ["vite", "/docs/with/vite"],
  ["nextjs", "/docs/with/nextjs"],
  [
    "excluded-module",
    "/docs/troubleshooting#excluded-module-error",
  ],
  ["invalid-path", "/docs/troubleshooting#invalidpath"],
  [
    "case-insensitive-duplicate-path",
    "/docs/troubleshooting#caseinsensitiveduplicatepath",
  ],
  ["unsupported-file-type", "/docs/troubleshooting#invalidentrytype"],
  ["invalid-external-import", "/docs/troubleshooting#invalidexternalimport"],
  ["missing-license", "/docs/troubleshooting#missinglicense"],
  ["slow-type", "/docs/about-slow-types"],
]);

const slowTypesRedirects = new Map([
  ["missing-explicit-type", "#explicit-types"],
  ["missing-explicit-return-type", "#explicit-types"],
  ["unsupported-ambient-module", "#global-augmentation"],
  [
    "unsupported-complex-reference",
    "#types-must-be-simply-inferred-or-explicit",
  ],
  [
    "unsupported-default-export-expr",
    "#types-must-be-simply-inferred-or-explicit",
  ],
  ["unsupported-destructuring", "#no-destructuring-in-exports"],
  ["unsupported-global-module", "#global-augmentation"],
  ["unsupported-require", "#commonjs-features"],
  [
    "unsupported-private-member-reference",
    "#types-must-not-reference-private-fields-of-the-class",
  ],
  [
    "unsupported-super-class-expr",
    "#types-must-be-simply-inferred-or-explicit",
  ],
  ["unsupported-ts-export-assignment", "#commonjs-features"],
  ["unsupported-ts-namespace-export", "#global-augmentation"],
  ["unsupported-javascript-entrypoint", "#javascript-entrypoints"],
]);

export function go(id: string): string | null {
  const staticRedirect = staticRedirects.get(id);
  if (staticRedirect) return staticRedirect;

  if (id.startsWith("zap-") || id.startsWith("slow-type-")) {
    const slowTypesRedirect = slowTypesRedirects.get(id.slice(4)) ||
      slowTypesRedirects.get(id.slice(10));
    return "/docs/about-slow-types" + (slowTypesRedirect ?? "");
  }

  return null;
}
