import { Logger } from './log.service';

describe(' Service LoggerService', () => {
  let logger: Logger;



  beforeEach(() => {
    logger = new Logger();
  });

  it(' Check object creation', () => {
    expect(logger).toBeTruthy();
  });

  it(' Check for the warn method being called.', () => {
    const mockConsoleLogger = spyOn(logger, 'warn').and.callFake((msg: string) => {
      console.log(' Fake write:  ');
      return 1;
    });
    // Calling the warn
    logger.warn(' Warn to be called.');
    expect(logger.warn).toHaveBeenCalled();
  });

  it(' check if log method was called', () => {

    const mockConsoleLogger = spyOn(logger, 'log').and.callFake((msg: string) => {
      console.log(' Fake write:  ');
      return 1;
    });
    logger.log(' Log to be called');
    expect(logger.log).toHaveBeenCalled();
  });

  it(' check if error method was called.', () => {
    const mockConsoleLogger = spyOn(logger, 'error').and.callFake((msg: string) => {
      console.error(' Fake write:  ');
      return 1;
    });
    logger.error(' Error to be called.');
    expect(logger.error).toHaveBeenCalled();
  });
});
