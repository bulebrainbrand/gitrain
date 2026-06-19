import type { Blob_ } from "./blob";
import type { Commit } from "./commit";
import type { Tagger } from "./tagger";
import type { Tree } from "./tree";
// every annotated tag shuold has 'getTags():Promise<Tag[]>' for tagged to tag. but i don't need.....
export interface LightWeightTag {
  getCommit(): Promise<Commit>;
  getTagName(): Promise<string>;
  toString(): string;
}

export interface AnnotatedBlobTag {
  getTarget(): Promise<Blob_>;
  getType(): "blob";
  getTagName(): string;
  getTagger(): Promise<Tagger>;
  getMessage(): string;
}

export interface AnnotatedTreeTag {
  getTarget(): Promise<Tree>;
  getType(): "tree";
  getTagName(): string;
  getTagger(): Promise<Tagger>;
  getMessage(): string;
}

export interface AnnotatedCommitTag {
  getTarget(): Promise<Commit>;
  getType(): "commit";
  getTagName(): string;
  getTagger(): Promise<Tagger>;
  getMessage(): string;
}
/**
 * tag to tag (i can't understand myself)
 */
export interface AnnotatedTagTag {
  getTarget(): Promise<AnnotatedTag>;
  getType(): "tag";
  getTagName(): string;
  getTagger(): Promise<Tagger>;
  getMessage(): string;
}

export type AnnotatedTag =
  | AnnotatedBlobTag
  | AnnotatedCommitTag
  | AnnotatedTreeTag
  | AnnotatedTagTag;
export type Tag = AnnotatedTag | LightWeightTag;