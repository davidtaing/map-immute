import { ImmutableMap } from "..";

test("Has returns true when the key exists", () => {
  const map = new ImmutableMap([["Matching Key", 1]]);

  expect(map.has("Matching Key")).toBeTruthy();
});

test("Has returns false when the key does not exist", () => {
  const map = new ImmutableMap([["Different Key", 1]]);

  expect(map.has("Missing Key")).toBeFalsy();
});
