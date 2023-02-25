import { ImmutableMap } from "..";

test("Set returns new map: non-empty map", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 2],
  ]);

  const newMap = map.set("c", 3);

  expect(newMap).not.toEqual(map);
});

test("Set returns new map: empty map", () => {
  const map = new ImmutableMap([]);

  const newMap = map.set("a", 1);

  expect(newMap).not.toEqual(map);
});

test("Calling Set on empty ImmutableMap does not mutate original map", () => {
  const map = new ImmutableMap<string, number>();
  map.set("a", 1);

  const expected = new ImmutableMap<string, number>();

  expect(map).toEqual(expected);
});

test("Calling Set on non-empty ImmutableMap does not mutate original map", () => {
  const map = new ImmutableMap<string, number>([["a", 1]]);
  map.set("a", 1);

  const expected = new ImmutableMap<string, number>([["a", 1]]);

  expect(map).toEqual(expected);
});

test("Returned ImmutableMap's size prop increases by 1", () => {
  const originalMap = new ImmutableMap<string, number>();
  const result = originalMap.set("a", 1);

  expect(result.size).toEqual(1);
});

test("Returned ImmutableMap contains new item", () => {
  const originalMap = new ImmutableMap<string, number>();
  const result = originalMap.set("a", 1);

  const expected = new ImmutableMap([["a", 1]]);

  expect(result).toEqual(expected);
});

it("new item from set can be retrived by calling ImmutableMap.get", () => {
  const originalMap = new ImmutableMap<string, number>();
  const result = originalMap.set("a", 1);

  expect(result.get("a")).toEqual(1);
});

it("Set updates value, when the key already exists", () => {
  const originalMap = new ImmutableMap<string, number>([["a", 1]]);
  const result = originalMap.set("a", 2);

  expect(result.get("a")).toEqual(2);
});
