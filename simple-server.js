// A very simple production server script
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// Convert ESM URL to file path
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

console.log('Starting the simple production server...');
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

// Use PORT environment variable or default to 5001
const port = process.env.PORT || 5001;
const server = app.listen(port, '0.0.0.0', () => {
  console.log(`Simple production server running on port ${port}`);
});

// Handle server errors
server.on('error', (error) => {
  console.error('Server error:', error);
});