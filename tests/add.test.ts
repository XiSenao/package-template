import { describe, it, expect } from "vitest";
import { add } from "../src";

describe("add", () => {
  it("1 + 2 = 3", () => expect(add(1, 2)).toEqual(3));
  it("2 + 2 != 3", () => expect(add(1, 2)).toEqual(3));
  it("RNG", () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;

    expect(add(1, randomNumber)).toEqual(1 + randomNumber);
  });
});
