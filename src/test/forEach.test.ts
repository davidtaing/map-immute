import { ImmutableMap } from "..";

test("does not mutate original map when a callback with update mutations is passed", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 1],
    ["c", 1],
  ]);
  map.forEach((value, key, map) => {
    // mutates/changes values to 2
    map.set(key, value + 1);
  });

  expect(map).toEqual(
    new ImmutableMap([
      ["a", 1],
      ["b", 1],
      ["c", 1],
    ])
  );
});

test("does not mutate original map when a callback with delete mutations is passed", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 1],
    ["c", 1],
  ]);
  map.forEach((value, key, map) => {
    map.delete(key);
  });

  expect(map).toEqual(
    new ImmutableMap([
      ["a", 1],
      ["b", 1],
      ["c", 1],
    ])
  );
});
