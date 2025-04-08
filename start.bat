@echo off
echo Starting Anchor Paints website...
echo Setting NODE_ENV to production...

:: Set environment variable for this session
set NODE_ENV=production

:: Verify the environment setting 
echo Current NODE_ENV: %NODE_ENV%

:: Run the server with environment explicitly set
node start.js
