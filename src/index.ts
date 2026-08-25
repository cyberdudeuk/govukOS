/**
 * govukOS - Main Entry Point
 * A modern, accessible operating system interface inspired by GOV.UK Design System
 */

export const name = 'govukOS';
export const version = '0.1.0';

/**
 * Initialize govukOS
 */
export function init(): void {
  console.info(`Initializing ${name} v${version}`);
  console.info('✓ govukOS is ready');
}

// Auto-initialize when module is loaded
if (require.main === module) {
  init();
}
