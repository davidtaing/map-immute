export class ImmutableMap<K, V> implements Map<K, V> {
  data: ReadonlyMap<K, V>;
  size: number;

  constructor(entries?: Iterable<readonly [K, V]> | null) {
    this.data = new Map(entries);
    this.size = this.data.size;
  }

  [Symbol.iterator](): IterableIterator<[K, V]> {
    return this.data.entries();
  }

  get [Symbol.toStringTag]() {
    return "ImmutableMap";
  }

  clear(): void {
    throw new Error(
      "Cannot call the clear method on an ImmutableMap. Please use safeClear instead."
    );
  }

  delete(key: K): boolean {
    throw new Error(
      "Cannot call the delete method on an ImmutableMap. Please use safeDelete instead."
    );
  }

  // TODO
  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): void {
    throw new Error("Method not implemented.");
  }

  get(key: K): V | undefined {
    return this.data.get(key);
  }

  has(key: K): boolean {
    return this.data.has(key);
  }

  safeClear(): ImmutableMap<K, V> {
    return new ImmutableMap<K, V>();
  }

  /**
   * Immutable set. Returns new Map if the key/value is different.
   * Otherwise returns the original ImmutableMap if key/value is the same.
   * @param key
   * @param value
   */
  set(key: K, value: V): this {
    if (this.data.get(key) === value) {
      return this;
    }

    const mutableMap = new Map<K, V>(this);
    mutableMap.set(key, value);

    return new ImmutableMap<K, V>(mutableMap) as this;
  }

  // TODO
  entries(): IterableIterator<[K, V]> {
    throw new Error("Method not implemented.");
  }

  // TODO
  keys(): IterableIterator<K> {
    throw new Error("Method not implemented.");
  }

  // TODO
  values(): IterableIterator<V> {
    throw new Error("Method not implemented.");
  }
}
