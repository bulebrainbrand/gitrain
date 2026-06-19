import type { Author } from "./author";
import type { CoAuthoredUser } from "./coAuthoredUser";
import type { Commiter } from "./commiter";
import type { AnnotatedCommitTag, AnnotatedTagTag, LightWeightTag, Tag } from "./tag";
import type { Tree } from "./tree";
/**
 * @description
 * you should add
 * ```ts
 * static factory(
    commitId: CommitId,
    treeId: TreeId,
    parent: CommitId[],
    author: User & Timestamp,
    committer: User & Timestamp,
    coAuthoredUsers: User[],
    message: string,
  ): Commit;
 * ```
 * static method. but core package dont care how to make instance. this is a optional
 */
export interface Commit {
  backCommit(): Promise<Commit[]>;
  nextCommit(): Promise<Commit | null>;
  getAuthor(): Promise<Author>;
  getCoAuthoredUsers(): Promise<CoAuthoredUser[]>;
  getCommitter(): Promise<Commiter>;
  getTags(): Promise<Tag[]>;
  /**
   * sometimes, dumb will tagged to tag. this method expect recursive get tag.
   */
  getAnnotatedTag(): Promise<(AnnotatedTagTag | AnnotatedCommitTag)[]>;
  getLightWeightTag(): Promise<LightWeightTag>;
  getMessage(): string;
  getTree(): Promise<Tree>;
}