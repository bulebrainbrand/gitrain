import type { Blob_ } from "./blob";
import type { Commit } from "./commit";
// why i made sh*t mode in type???? it's unnecessary in my project!!!!!!!!
export type TreeEntityMode = {
  blob: "100644" | "100755" | "120000";
  tree: "040000";
  commit: "160000";
};
/**
 * maybe this object should has TreeId, if you don't need that,every human don't need that
 *
 * well, this object should has 'getTags' method... but i sure it's trash
 */
export interface Tree {
  getChilds(): Promise<TreeEntity[]>;
}

export interface CommitTreeEntity {
  getMode(): TreeEntityMode["commit"];
  getPath(): string;
  getType(): "commit";
  getChild(): Promise<Commit>;
}
/**
 * tree has tree
 */
export interface TreeTreeEntity {
  getMode(): TreeEntityMode["tree"];
  getPath(): string;
  getType(): "tree";
  getChild(): Promise<Tree>;
}

export interface BlobTreeEntity {
  getMode(): TreeEntityMode["blob"];
  getPath(): string;
  getType(): "blob";
  getChild(): Promise<Blob_>;
}

export type TreeEntity = CommitTreeEntity | TreeTreeEntity | BlobTreeEntity;