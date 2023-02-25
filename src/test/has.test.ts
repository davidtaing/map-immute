import { ImmutableMap } from "..";

test("Has returns true when the key exists", () => {
  const map = new ImmutableMap([["Matching Key", 1]]);

  expect(map.has("Matching Key")).toBeTruthy();
});
