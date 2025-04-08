// Cross-platform start script for the Anchor Paints website
// Works on Windows, macOS, and Linux

// Set environment variables programmatically - with verification
console.log('Setting environment variables...');
process.env.NODE_ENV = 'production';
process.env.PORT = '5001';

// Verify environment variables are properly set
console.log('NODE_ENV:', process.env.NODE_ENV);
console.log('PORT:', process.env.PORT);

// Add a check to see if NODE_ENV is properly set
if (process.env.NODE_ENV !== 'production') {
  console.warn('Warning: NODE_ENV not properly set. Forcing it again...');
  process.env.NODE_ENV = 'production';
  console.log('NODE_ENV (after fix):', process.env.NODE_ENV);
}

// Import and run the simple server
console.log('Starting simple server with production configuration...');
import './simple-server.js';