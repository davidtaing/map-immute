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
