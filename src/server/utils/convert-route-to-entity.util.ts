const mapping: Record<string, string> = {
  advertisements: 'advertisement',
  organizations: 'organization',
  posts: 'post',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
