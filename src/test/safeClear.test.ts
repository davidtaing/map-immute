import { ImmutableMap } from "..";

it("does not mutate original map", () => {
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

it("does not mutate original map", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);

  map.safeClear();

  // actually a false positive, same as before, but still passing
  expect(map).toEqual(undefined);
});
