import { ImmutableMap } from "..";

test("set method returns a new map", () => {
  const immutableMap = new ImmutableMap<string, string>();

  const newMap = immutableMap.set("a", "1");

  expect(newMap).not.toEqual(immutableMap);
});

test("set method does not mutate original map", () => {
  const immutableMap = new ImmutableMap<string, string>();
  immutableMap.set("a", "1");

  const expected = new ImmutableMap<string, string>();

  expect(immutableMap).toEqual(expected);
});
