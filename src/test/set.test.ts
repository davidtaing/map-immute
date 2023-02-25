import { ImmutableMap } from "..";

test("set method returns a new map", () => {
  const immutableMap = new ImmutableMap<string, string>();

  const newMap = immutableMap.set("a", "1");

  expect(newMap).not.toEqual(immutableMap);
});
