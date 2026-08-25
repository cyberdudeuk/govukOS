import { name, version, init } from '../index';

describe('govukOS', () => {
  beforeEach(() => {
    jest.spyOn(console, 'info').mockImplementation(() => {});
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('should export correct name', () => {
    expect(name).toBe('govukOS');
  });

  test('should export correct version', () => {
    expect(version).toBe('0.1.0');
  });

  test('should initialize without errors', () => {
    expect(() => init()).not.toThrow();
  });

  test('should log initialization message', () => {
    init();
    expect(console.info).toHaveBeenCalledWith(expect.stringContaining('Initializing'));
  });
});
