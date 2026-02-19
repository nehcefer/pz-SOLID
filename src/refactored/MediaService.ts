//DIP — залежить від абстракцій, не від конкретних класів
import { IMediaConverter } from '../interfaces/IMediaConverter';
import { IMediaRepository } from '../interfaces/IMediaRepository';
import { INotifier } from '../interfaces/INotifier';

export class MediaService {
  constructor(
    private converter: IMediaConverter,
    private repository: IMediaRepository,
    private notifier: INotifier
  ) {}

  process(filename: string): void {
    const converted = this.converter.convert(filename);
    this.repository.save(converted);
    this.notifier.notify(`File "${converted}" has been processed`);
  }
}
