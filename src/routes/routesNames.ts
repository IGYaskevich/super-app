type RoutesKeyType = "HOME" | "POST"
type RoutesType = Record<RoutesKeyType, string>

export const ROUTES_NAMES: RoutesType = {
    HOME: "/",
    POST: "/post-page",
};
