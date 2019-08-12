import { Logger } from './log.service';

/**
 * Test cases for the Logger service.
 */
describe(' Service LoggerService', () => {
  let logger: Logger;
  let mockSetLogger: any;
  let mockGetLogger: any;

  beforeEach(() => {
    logger = new Logger();
    mockSetLogger = spyOnProperty(logger, 'debugMode', 'set').and.callThrough();
    mockGetLogger = spyOnProperty(logger, 'debugMode', 'get').and.callThrough();
  });

  it(' Check object creation', () => {
    expect(logger).toBeTruthy();
  });


  it(' Check for the warn method being called.', () => {
    spyOn(console, 'warn');
    spyOn(logger, 'warn').and.callThrough();

    // Calling the warn
    logger.warn(' Warn to be called.');

    expect(logger.warn).toHaveBeenCalled();
    expect(console.warn).toHaveBeenCalled();

  });

  it(' check if log method was called', () => {
    spyOn(console, 'log');
    spyOn(logger, 'log').and.callThrough();

    logger.log(' Log to be called');

    expect(logger.log).toHaveBeenCalled();
    expect(console.log).toHaveBeenCalled();
  });

  it(' check if error method was called.', () => {
    spyOn(console, 'error');
    spyOn(logger, 'error').and.callThrough();

    logger.error(' Error to be called.');

    expect(logger.error).toHaveBeenCalled();
    expect(console.error).toHaveBeenCalled();
  });

  it(' check if the setDebugMode (False) is called.', () => {
    logger.debugMode = false;
    spyOn(console, 'error');
    spyOn(logger, 'error');

    logger.error(' Will not be called!');

    expect(mockSetLogger).toHaveBeenCalled();

    expect(logger.debugMode).toBeFalsy();
    expect(mockGetLogger).toHaveBeenCalled();
    expect(console.error).not.toHaveBeenCalled();
    expect(logger.error).toHaveBeenCalled();
  });

  it(' check if the getDebugMode is called.', () => {
    const debugMode = logger.debugMode;

    expect(mockGetLogger).toHaveBeenCalled();
  });
});
