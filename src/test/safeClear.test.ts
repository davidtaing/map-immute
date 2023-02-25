import { ImmutableMap } from "..";

test("safeClear returns a new map", () => {
  const map = new ImmutableMap([["a", 1]]);
  const newMap = map.safeClear();

  expect(newMap === map).toBeFalsy();
  expect(newMap).not.toStrictEqual(map);
});

test("safeClear's new map size is 0", () => {
  const map = new ImmutableMap([["a", 1]]);
  const newMap = map.safeClear();

  expect(newMap.size).toEqual(0);
});

test("safeClear's new map is empty", () => {
  const map = new ImmutableMap([["a", 1]]);
  const newMap = map.safeClear();

  expect(newMap).toEqual(new ImmutableMap<string, number>());
});

test("safeClear does not mutate the original map", () => {
  const map = new ImmutableMap([["a", 1]]);
  map.safeClear();

  expect(map).not.toEqual(new ImmutableMap<string, number>());
});
