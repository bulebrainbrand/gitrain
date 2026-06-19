/**
 * blob is build in. so i add underbar
 */

export interface Blob_ {
  getBuffer(): Promise<Uint8Array<ArrayBuffer | SharedArrayBuffer>>; // allow lazy
  toString(): string;
}