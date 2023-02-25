/**
 * Tests for ImmutableMap's disabled methods.
 *
 * Since the method signatures cannot be changed, this limits our ability to write immutable implementations.
 *
 * I've opted instead to create "safe" immutable versions of the methods.
 */

import { ImmutableMap } from "..";

test("calling Clear throws error", () => {
  const map = new ImmutableMap([["a", 1]]);

  expect(() => map.clear()).toThrow(
    "Cannot call the clear method on an ImmutableMap. Please use safeClear instead."
  );
});

test("calling Delete throws error", () => {
  const map = new ImmutableMap([["a", 1]]);

  expect(() => map.delete("a")).toThrow(
    "Cannot call the delete method on an ImmutableMap. Please use safeDelete instead."
  );
});
