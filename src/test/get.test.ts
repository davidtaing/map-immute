import { ImmutableMap } from "..";

test("Get returns undefined for empty map", () => {
  const originalMap = new ImmutableMap<string, number>();

  expect(originalMap.get("missing key")).toBeUndefined();
});

test("Get returns undefined if key is not found", () => {
  const originalMap = new ImmutableMap<string, number>([["other key", 2]]);

  expect(originalMap.get("missing key")).toBeUndefined();
});

test("Get returns correct value when key is found", () => {
  const originalMap = new ImmutableMap<string, number>([["matching key", 1]]);

  expect(originalMap.get("matching key")).toEqual(1);
});
