/**
 * Internal tools for use within Gluegun
 */

function head<T>(a: T[]): T {
  return a[0];
}

function tail<T>(a: T[]): T[] {
  return a.slice(1);
}

function identity<T>(a: T): T {
  return a;
}

function isNil(a: any): boolean {
  return a === null || a === undefined;
}

function split(b: string, a: string): string[] {
  return a.split(b);
}

function trim(a: string): string {
  return a.trim();
}

function forEach<T>(f: (i: T) => void, a: T[]): void {
  a.forEach(f);
}

function keys<T = unknown>(a: T): string[] {
  if (Object(a) !== a) {
    return [];
  }
  // @ts-expect-error
  return Object.keys(a);
}

function replace(b: string | RegExp, c: string, a: string): string {
  return a.replace(b, c);
}

function last<T>(a: T[]): T {
  return a[a.length - 1];
}

function reject<T>(f: (i: T) => boolean, a: T[]): T[] {
  return a.filter((b) => !f(b));
}

function is(Ctor: any, val: any): boolean {
  return (val != null && val.constructor === Ctor) || val instanceof Ctor;
}

function takeLast<T>(n: number, a: T[]): T[] {
  return a.slice(-1 * n);
}

function equals(a: string[], b: string[]): boolean {
  return a.length === b.length && a.every((v, i) => v === b[i]);
}

function times(fn: (i: any) => any, n: number): any[] {
  const list = new Array(n);
  for (let i = 0; i < n; i++) {
    list[i] = fn(i);
  }
  return list;
}

function prop(p: string, obj: unknown): any {
  if(!obj) return undefined;
  if(typeof obj !== 'object') return obj;
  if(!obj.hasOwnProperty(p)) return undefined;
  // @ts-expect-error
  return obj[p];
  
}

export {
  head,
  identity,
  isNil,
  split,
  tail,
  trim,
  forEach,
  keys,
  replace,
  last,
  reject,
  is,
  takeLast,
  equals,
  times,
  prop,
};
