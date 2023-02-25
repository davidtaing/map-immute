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
    throw new Error("Method not implemented.");
  }

  delete(key: K): boolean {
    throw new Error("Method not implemented.");
  }

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
    throw new Error("Method not implemented.");
  }

  set(key: K, value: V): this {
    if (this.data.get(key) === value) {
      return this;
    }

    const mutableMap = new Map<K, V>(this);
    mutableMap.set(key, value);

    return new ImmutableMap<K, V>(mutableMap) as this;
  }

  entries(): IterableIterator<[K, V]> {
    throw new Error("Method not implemented.");
  }

  keys(): IterableIterator<K> {
    throw new Error("Method not implemented.");
  }

  values(): IterableIterator<V> {
    throw new Error("Method not implemented.");
  }
}
