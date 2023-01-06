type RoutesKeyType = "HOME" | "CONTACT" | "POST"
type RoutesType = Record<RoutesKeyType, string>

export const ROUTES_NAMES: RoutesType = {
    HOME: "/",
    CONTACT: "/contact-page",
    POST: "/post-page",
};
