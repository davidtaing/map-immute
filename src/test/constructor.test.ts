import { ImmutableMap } from "..";

test("empty constructor creates a new empty ImmutableMap", () => {
  const map = new ImmutableMap();

  expect(map).toEqual(new ImmutableMap());
});

test("constructor creates a new ImmutableMap from Array", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 2],
  ]);

  const expected = new ImmutableMap([
    ["a", 1],
    ["b", 2],
  ]);

  expect(map).toEqual(expected);
});

test("constructor creates a new ImmutableMap from Vanilla Map", () => {
  const inputVanillaMap = new Map([
    ["a", 1],
    ["b", 2],
  ]);

  const map = new ImmutableMap(inputVanillaMap);

  const expected = new ImmutableMap([
    ["a", 1],
    ["b", 2],
  ]);

  expect(map).toEqual(expected);
});
