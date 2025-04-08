// A simple production server in CommonJS format for Windows compatibility
const express = require('express');
const path = require('path');

// Force set environment variables - added additional checks for Windows compatibility
process.env.NODE_ENV = 'production';
const PORT = process.env.PORT || 5001;

// Double check NODE_ENV is set
if (process.env.NODE_ENV !== 'production') {
  console.warn('Warning: NODE_ENV not set to production. Forcing it now.');
  process.env.NODE_ENV = 'production';
}

console.log('Starting the production server...');
console.log('Environment:', process.env.NODE_ENV);
console.log('Current directory:', __dirname);

const app = express();

// Serve static files from the dist/public directory
const staticDir = path.join(__dirname, 'dist', 'public');
console.log('Serving static files from:', staticDir);
app.use(express.static(staticDir));

// For all other routes, serve the index.html
app.get('*', (req, res) => {
  const indexPath = path.join(__dirname, 'dist', 'public', 'index.html');
  console.log('Request received, serving:', indexPath);
  res.sendFile(indexPath);
});

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Production server running on port ${PORT}`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});