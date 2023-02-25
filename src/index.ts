export class ImmutableMap<K, V> extends Map<K, V> {
  clear(): void {
    throw new Error(
      "Cannot call the clear method from an immutable map. Please use safeClear instead."
    );
  }

  delete(key: K): boolean {
    Object.getPrototypeOf(this).delete.call(this, key);

    throw new Error(
      "Cannot delete from an immutable map. Please use safeDelete instead."
    );
  }

  forEach(
    callbackfn: (value: V, key: K, map: Map<K, V>) => void,
    thisArg?: any
  ): void {
    const map = new Map(this);
    map.forEach(callbackfn, thisArg);
  }

  safeClear(): ImmutableMap<K, V> {
    return new ImmutableMap<K, V>();
  }

  safeDelete(key: K): ImmutableMap<K, V> | false {
    const mutableMap = new Map(this) as ImmutableMap<K, V>;
    const deleted = mutableMap.delete(key);

    const result = new ImmutableMap(mutableMap);

    return deleted ? result : false;
  }

  set(key: K, value: V): this {
    return new Map(this).set(key, value) as this;
  }
}
