// Cross-platform start script for the Anchor Paints website
// Works on Windows, macOS, and Linux

// Set environment variables programmatically
process.env.NODE_ENV = 'production';
process.env.PORT = '5001';

// Import and run the simple server
import './simple-server.js';