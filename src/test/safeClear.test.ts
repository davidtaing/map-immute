import { ImmutableMap } from "..";

it("false postitive: does not mutate original map", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);

  map.safeClear();

  // actually a false positive
  expect(map).toEqual(
    new ImmutableMap([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ])
  );
});

it("false postitive: does not mutate original map", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);

  map.safeClear();

  // actually a false positive
  // same input & setup, different assert
  // but still passing.
  expect(map).toEqual(new ImmutableMap([]));
});

it("failed comparison", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);

  map.safeClear();

  // converted to typedef string e.g. "Map {}"
  expect(map).toEqual(undefined);
});
