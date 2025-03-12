const DASHBOARD_ROUTE = "/dashboard";

export const PUBLIC_ROUTES = {
  HOME: "/",
  TRENDING: "/trending",
  SPECIAL_OFFERS: "/special-offers",
  CATEGORIES: "/categories",
  BROWSE: "/browse",
  CART: "/cart",
  SEARCH: "/search",
};

export const PRIVATE_ROUTES = {
  DASHBOARD: DASHBOARD_ROUTE,
  ANALYTICS: `${DASHBOARD_ROUTE}/analytics`,
  PROFILE: "/profile",
  MY_LIBRARY: "/my-library",
  NOTIFICATIONS: "/notifications",
};
