//SRP — тільки сповіщення
import { INotifier } from '../interfaces/INotifier';

export class EmailNotifier implements INotifier {
  notify(message: string): void {
    console.log(`[EMAIL] ${message}`);
  }
}

export class SmsNotifier implements INotifier {
  notify(message: string): void {
    console.log(`[SMS] ${message}`);
  }
}
