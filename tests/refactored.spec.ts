import { MediaService } from '../src/refactored/MediaService';
import { Mp3Converter, WavConverter, OggConverter } from '../src/refactored/MediaConverters';
import { InMemoryMediaRepository } from '../src/refactored/MediaRepository';
import { EmailNotifier, SmsNotifier } from '../src/refactored/Notifier';

// ─── MediaConverters (OCP) ───────────────────────────────────────────────────

describe('MediaConverters', () => {
  it('Mp3Converter converts filename to .mp3', () => {
    const converter = new Mp3Converter();
    expect(converter.convert('song.flac')).toBe('song.mp3');
  });

  it('WavConverter converts filename to .wav', () => {
    const converter = new WavConverter();
    expect(converter.convert('song.flac')).toBe('song.wav');
  });

  it('OggConverter converts filename to .ogg', () => {
    const converter = new OggConverter();
    expect(converter.convert('song.flac')).toBe('song.ogg');
  });
});

// ─── InMemoryMediaRepository (SRP) ───────────────────────────────────────────

describe('InMemoryMediaRepository', () => {
  it('saves a file and returns it in history', () => {
    const repo = new InMemoryMediaRepository();
    repo.save('track.mp3');
    expect(repo.getHistory()).toContain('track.mp3');
  });

  it('stores multiple files', () => {
    const repo = new InMemoryMediaRepository();
    repo.save('a.mp3');
    repo.save('b.wav');
    expect(repo.getHistory()).toHaveLength(2);
  });
});

// ─── Notifiers (SRP) ─────────────────────────────────────────────────────────

describe('Notifiers', () => {
  it('EmailNotifier calls notify without throwing', () => {
    const notifier = new EmailNotifier();
    expect(() => notifier.notify('File ready')).not.toThrow();
  });

  it('SmsNotifier calls notify without throwing', () => {
    const notifier = new SmsNotifier();
    expect(() => notifier.notify('File ready')).not.toThrow();
  });
});

// ─── MediaService (DIP) ──────────────────────────────────────────────────────

describe('MediaService', () => {
  it('converts, saves and notifies using mocks', () => {
    const mockConverter = { convert: jest.fn().mockReturnValue('song.mp3') };
    const mockRepo      = { save: jest.fn(), getHistory: jest.fn() };
    const mockNotifier  = { notify: jest.fn() };

    const service = new MediaService(mockConverter, mockRepo, mockNotifier);
    service.process('song.flac');

    expect(mockConverter.convert).toHaveBeenCalledWith('song.flac');
    expect(mockRepo.save).toHaveBeenCalledWith('song.mp3');
    expect(mockNotifier.notify).toHaveBeenCalledWith('File "song.mp3" has been processed');
  });

  it('works with any IMediaConverter implementation (OCP)', () => {
    const wavConverter = new WavConverter();
    const repo         = new InMemoryMediaRepository();
    const notifier     = new EmailNotifier();

    const service = new MediaService(wavConverter, repo, notifier);
    service.process('video.mp4');

    expect(repo.getHistory()).toContain('video.wav');
  });
});
