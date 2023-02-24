import { ImmutableMap } from "..";

test("throws an error", () => {
  const map = new ImmutableMap([
    ["a", 1],
    ["b", 2],
    ["c", 3],
  ]);

  const invokeClear = () => {
    map.clear();
  };

  expect(invokeClear).toThrow(
    "Cannot call the clear method from an immutable map. Please use safeClear instead."
  );
});
