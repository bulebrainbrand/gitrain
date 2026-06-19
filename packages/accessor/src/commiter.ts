export interface Commiter {
  getName(): string;
  getEmail(): string;
  getTimestamp(): number;
}