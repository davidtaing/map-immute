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

  /**
   * Please use safeClear instead.
   *
   * @throws
   * error when called due to the Type Definition
   * being too restrictive for an immutable implementation.
   *
   */
  clear(): void {
    throw new Error(
      "Cannot call the clear method on an ImmutableMap. Please use safeClear instead."
    );
  }

  /**
   * Please use safeDelete instead.
   *
   * @throws
   * error when called due to the Type Definition
   * being too restrictive for an immutable implementation.
   *
   */
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

  /**
   * @returns new empty ImmutableMap
   */
  safeClear(): ImmutableMap<K, V> {
    return new ImmutableMap<K, V>();
  }

  /**
   * @returns new ImmutableMap without specified key/value pair.
   * Otherwise returns false as per the original boolean return time.
   */
  safeDelete(key: K): ImmutableMap<K, V> | false {
    const mutableMap = new Map<K, V>(this);
    const deleted = mutableMap.delete(key);

    const result = new ImmutableMap<K, V>(mutableMap);

    return deleted ? result : false;
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
