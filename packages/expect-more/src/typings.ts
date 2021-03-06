export type Collection = any[] | object;
export type VoidFn = () => void;
export type UnaryBoolFn = (value: any) => boolean;
export type Reducer = (memo: any, value: any, key: number | string, collection: Collection) => any;

export type ICurry1Arg<a, z> = (a: a) => z;
export interface ICurry2Args<a, b, z> {
  (a: a, b: b): z;
  (a: a): ICurry1Arg<b, z>;
}

export interface ICurry3Args<a, b, c, z> {
  (a: a, b: b, c: c): z;
  (a: a, b: b): ICurry1Arg<c, z>;
  (a: a): ICurry2Args<b, c, z>;
}

export interface ICurry4Args<a, b, c, d, z> {
  (a: a, b: b, c: c, d: d): z;
  (a: a, b: b, c: c): ICurry1Arg<d, z>;
  (a: a, b: b): ICurry2Args<c, d, z>;
  (a: a): ICurry3Args<b, c, d, z>;
}

export interface ICurry5Args<a, b, c, d, e, z> {
  (a: a, b: b, c: c, d: d, e: e): z;
  (a: a, b: b, c: c, d: d): ICurry1Arg<e, z>;
  (a: a, b: b, c: c): ICurry2Args<d, e, z>;
  (a: a, b: b): ICurry3Args<c, d, e, z>;
  (a: a): ICurry4Args<b, c, d, e, z>;
}

export interface ICurry {
  <a, z>(f: (a: a) => z, ctx?: any): ICurry1Arg<a, z>;
  <a, b, z>(f: (a: a, b: b) => z, ctx?: any): ICurry2Args<a, b, z>;
  <a, b, c, z>(f: (a: a, b: b, c: c) => z, ctx?: any): ICurry3Args<a, b, c, z>;
  <a, b, c, d, z>(f: (a: a, b: b, c: c, d: d) => z, ctx?: any): ICurry4Args<a, b, c, d, z>;
  <a, b, c, d, e, z>(f: (a: a, b: b, c: c, d: d, e: e) => z, ctx?: any): ICurry5Args<a, b, c, d, e, z>;
}
