import { add } from "./add";

describe("add function", () => {
  it("should add the two given numbers", () => {
    expect(add(1, 2)).toBe(3);
  });
});
