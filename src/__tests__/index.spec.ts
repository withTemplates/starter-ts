import { describe, expect, it } from "vitest";
import { a, b } from "..";

describe("test", () => {
  it("should pass", () => {
    expect(a + b).toBe(3);
  });
});
