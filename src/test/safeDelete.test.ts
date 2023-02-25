import { ImmutableMap } from "..";

test("does not mutate original map", () => {
  const map = new ImmutableMap([["a", 1]]);
  map.safeDelete("a");

  expect(map).toEqual(new ImmutableMap([["a", 1]]));
});

test("returns a new map", () => {
  const map = new ImmutableMap([["a", 1]]);
  const newMap = map.safeDelete("a");

  expect(newMap === map).toBeFalsy();
  expect(newMap).not.toStrictEqual(map);
});

test("returns a new map without the item", () => {
  const map = new ImmutableMap([["a", 1]]);
  const newMap = map.safeDelete("a") as ImmutableMap<string, number>;

  expect(newMap.has("a")).toBeFalsy();
});

test("returns false if the key does not exist", () => {
  const map = new ImmutableMap([["Different Key", 1]]);
  const newMap = map.safeDelete("Missing Key");

  expect(newMap).toEqual(false);
});
