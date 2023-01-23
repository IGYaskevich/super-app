type RoutesKeyType = "HOME" | "POST" | "PET_PROJECTS";
type RoutesType = Record<RoutesKeyType, string>;

const initialURL = "/super-app/";
export const ROUTES_NAMES: RoutesType = {
  HOME: `${initialURL}`,
  POST: `${initialURL}posts`,
  PET_PROJECTS: `${initialURL}pet-projects`,
};
