export function normalizeRoles(roles) {
  if (typeof roles === "string") {
    roles = [roles];
  }

  if (!Array.isArray(roles)) {
    roles = [];
  }

  return roles;
}
