/**
 * Not sure what file to put these tests in.
 */

import { ImmutableMap } from "..";

test("Object.fromEntries() behaves the same for both ImmutableMap and Map", () => {
  const immutableMap = new ImmutableMap([
    [1, 1],
    [2, 2],
  ]);
  const immutableMapEntries = Object.fromEntries(immutableMap);

  const mutableMap = new Map([
    [1, 1],
    [2, 2],
  ]);

  const mutableMapEntries = Object.fromEntries(mutableMap);
  expect(immutableMapEntries).toEqual(mutableMapEntries);
});
