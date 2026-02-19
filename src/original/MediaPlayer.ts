// один величезний інтерфейс для всіх пристроїв
interface IDevice {
  play(): void;
  record(): void;    // радіо не може записувати
  rewind(): void;    // стрімінг не має перемотки
  burn(): void;      // більшість пристроїв не пишуть на диск
}

// RadioPlayer не може виконати record() і rewind()
class BasePlayer implements IDevice {
  play(): void { console.log('Playing...'); }
  record(): void { console.log('Recording...'); }
  rewind(): void { console.log('Rewinding...'); }
  burn(): void { console.log('Burning to disc...'); }
}

class RadioPlayer extends BasePlayer {
  record(): void {
    throw new Error('Radio cannot record!'); // LSP violation
  }
  rewind(): void {
    throw new Error('Radio cannot rewind!'); // LSP violation
  }
}

//  клас відповідає за відтворення, конвертацію, збереження і сповіщення
//  жорстко створює залежності через new
//  щоб додати новий формат конвертації — треба редагувати метод
class MediaPlayer {
  private history: string[] = [];

  // новий формат = редагування існуючого коду
  convert(filename: string, format: string): string {
    if (format === 'mp3') {
      return filename.replace(/\.\w+$/, '.mp3');
    } else if (format === 'wav') {
      return filename.replace(/\.\w+$/, '.wav');
    } else if (format === 'ogg') {
      return filename.replace(/\.\w+$/, '.ogg');
    } else {
      throw new Error('Unknown format');
    }
  }

  // збереження — не відповідальність MediaPlayer
  saveToHistory(filename: string): void {
    this.history.push(filename);
    console.log(`Saved ${filename} to local DB`);
  }

  //  сповіщення — не відповідальність MediaPlayer
  // пряма залежність від конкретної реалізації (console = "hardcoded notifier")
  notify(filename: string): void {
    console.log(`[EMAIL] File "${filename}" has been processed`);
    console.log(`[SMS] File "${filename}" ready`);
  }

  // весь процес в одному методі одного класу
  process(filename: string, format: string): void {
    const converted = this.convert(filename, format);
    this.saveToHistory(converted);
    this.notify(converted);
  }
}
