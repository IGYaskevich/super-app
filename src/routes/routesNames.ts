type RoutesKeyType = "HOME" | "POST" | "PET_PROJECTS";
type RoutesType = Record<RoutesKeyType, string>;

export const ROUTES_NAMES: RoutesType = {
  HOME: "/",
  POST: "/posts",
  PET_PROJECTS: "/pet-projects",
};
