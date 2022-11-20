import { describe, it, expect, vi } from "vitest";
import { adminPermissions } from "./adminPermissions";

// sample test
describe("Navbar", () => {
  describe("useIsAdmin", () => {
    it("should return false if random is less than or equal to 0.5", () => {
      vi.spyOn(Math, "random").mockReturnValue(0.1);

      const { isAdmin } = adminPermissions.useIsAdmin();

      expect(isAdmin).toBe(false);
    });
  });
});
