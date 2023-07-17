const mapping: Record<string, string> = {
  organizations: 'organization',
  releases: 'release',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
