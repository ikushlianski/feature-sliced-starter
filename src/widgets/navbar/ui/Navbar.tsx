import { adminPermissions } from "features";
import React from "react";

export const Navbar = () => {
  const { isAdmin } = adminPermissions.useIsAdmin();

  return (
    <div>
      <span>My Projects</span>
      {isAdmin && <span>Manage</span>}
    </div>
  );
};
