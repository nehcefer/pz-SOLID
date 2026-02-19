export interface IMediaRepository {
  save(filename: string): void;
  getHistory(): string[];
}
