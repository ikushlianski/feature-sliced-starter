class AdminPermissions {
  useIsAdmin() {
    return {
      isAdmin: Math.random() >= 0.5,
    };
  }
}

export const adminPermissions = new AdminPermissions();
