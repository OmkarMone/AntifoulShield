// Cross-platform start script
import { exec } from 'child_process';

// Use cross-env for environment variables on all platforms and set PORT to 5001
exec('npx cross-env NODE_ENV=production PORT=5001 node production-server.js', (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`Stderr: ${stderr}`);
    return;
  }
  console.log(`Output: ${stdout}`);
});