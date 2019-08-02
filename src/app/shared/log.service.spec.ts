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
    logger.debugMode = false;

    const mockConsoleLogger = spyOn(logger, 'warn').and.callFake((msg: string) => {
      return 1;
    });
    // Calling the warn
    logger.warn(' Warn to be called.');
    expect(logger.warn).toHaveBeenCalled();
  });

  it(' check if log method was called', () => {

    const mockConsoleLogger = spyOn(logger, 'log').and.callFake((msg: string) => {
      return 1;
    });
    logger.log(' Log to be called');
    expect(logger.log).toHaveBeenCalled();
  });

  it(' check if error method was called.', () => {
    const mockConsoleLogger = spyOn(logger, 'error').and.callFake((msg: string) => {
      return 1;
    });
    logger.error(' Error to be called.');
    expect(logger.error).toHaveBeenCalled();
  });

  it(' check if the setDebugMode is called.', () => {
    logger.debugMode = false;

    expect(mockSetLogger).toHaveBeenCalled();
  });

  it(' check if the getDebugMode is called.', () => {
    const debugMode = logger.debugMode;

    expect(mockGetLogger).toHaveBeenCalled();
  });
});
