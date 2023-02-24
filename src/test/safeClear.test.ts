import { ImmutableMap } from "..";

it("does not mutate original map", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);

  map.safeClear();

  expect(map).toEqual(
    new ImmutableMap([
      ["a", 1],
      ["b", 2],
      ["c", 3],
    ])
  );
});
