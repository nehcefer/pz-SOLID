//OCP — кожен формат окремий клас
import { IMediaConverter } from '../interfaces/IMediaConverter';

export class Mp3Converter implements IMediaConverter {
  convert(filename: string): string {
    return filename.replace(/\.\w+$/, '.mp3');
  }
}

export class WavConverter implements IMediaConverter {
  convert(filename: string): string {
    return filename.replace(/\.\w+$/, '.wav');
  }
}

export class OggConverter implements IMediaConverter {
  convert(filename: string): string {
    return filename.replace(/\.\w+$/, '.ogg');
  }
}
