import { type Commit } from "./commit";

/**
 * this is brance
 */
export interface Git {
  getFirstCommit(): Promise<Commit>;
}