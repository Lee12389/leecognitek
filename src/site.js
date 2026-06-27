export const ROUTES = {
  home: "/",
  vulnitek: "/vulnitek",
  mantrika: "/mantrika",
  lstat: "/lstat",
};

export const PRODUCT_ROUTES = {
  Vulnitek: ROUTES.vulnitek,
  Mantrika: ROUTES.mantrika,
  Lstat: ROUTES.lstat,
};

function trimTrailingSlash(value) {
  if (!value || value === "/") return value;
  return value.endsWith("/") ? value.slice(0, -1) : value;
}

export function normalizePathname(value = "/") {
  let normalized = value || "/";
  try {
    normalized = decodeURIComponent(normalized);
  } catch {
    normalized = value || "/";
  }
  normalized = normalized.toLowerCase();
  if (normalized.length > 1 && normalized.endsWith("/")) {
    normalized = normalized.slice(0, -1);
  }
  return normalized || "/";
}

export function getBasePath() {
  const base = import.meta.env.BASE_URL || "/";
  if (base === "/") return "";
  return trimTrailingSlash(base);
}

export function appPath(route = "/") {
  const normalized = route.startsWith("/") ? route : `/${route}`;
  const base = getBasePath();
  if (!base) return normalized;
  if (normalized === "/") return `${base}/`;
  return `${base}${normalized}`;
}

export function getAppPathname() {
  if (typeof window === "undefined") return ROUTES.home;
  let pathname = window.location.pathname;
  const base = getBasePath();
  if (base && pathname.toLowerCase().startsWith(base.toLowerCase())) {
    pathname = pathname.slice(base.length) || "/";
  }
  return normalizePathname(pathname);
}

export function getSiteUrl() {
  const fromEnv = String(import.meta.env.VITE_SITE_URL || "").trim();
  if (fromEnv) return trimTrailingSlash(fromEnv);
  if (typeof window !== "undefined") return window.location.origin;
  return "";
}

export function siteUrl(route = "/") {
  const origin = getSiteUrl();
  const normalized = route.startsWith("/") ? route : `/${route}`;
  if (!origin) return appPath(normalized);
  if (normalized === "/") return `${origin}/`;
  return `${origin}${normalized}`;
}

export function apiPath(route = "/api/contact") {
  return appPath(route.startsWith("/") ? route : `/${route}`);
}

export function isAppRoute(pathname, route) {
  const normalizedRoute = normalizePathname(route);
  const normalizedPath = normalizePathname(pathname);
  return normalizedPath === normalizedRoute;
}

export function isInternalAppHref(href) {
  if (!href || href.startsWith("#")) return false;
  if (/^(https?:|mailto:|tel:)/i.test(href)) return false;
  return href.startsWith("/") || href.startsWith(getBasePath() || "/");
}

export function toAppRoute(href) {
  const base = getBasePath();
  if (!base) return normalizePathname(href);
  if (href.toLowerCase().startsWith(base.toLowerCase())) {
    return normalizePathname(href.slice(base.length) || "/");
  }
  return normalizePathname(href);
}
