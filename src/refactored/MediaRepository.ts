//SRP — тільки збереження
import { IMediaRepository } from '../interfaces/IMediaRepository';

export class InMemoryMediaRepository implements IMediaRepository {
  private history: string[] = [];

  save(filename: string): void {
    this.history.push(filename);
    console.log(`Saved: ${filename}`);
  }

  getHistory(): string[] {
    return this.history;
  }
}
