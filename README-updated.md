# Anchor Paints - Antifouling Paint Website

A modern, static website for Anchor Paints' premium antifouling paint products.

## Features

- Responsive design that works on all devices
- Optimized for fast loading and performance
- Clean, maritime-themed design with red, blue, and white color scheme
- Complete sections including product features, application guide, benefits, gallery, and contact form
- Built with React and Tailwind CSS

## Getting Started

### Prerequisites

- Node.js (version 18 or newer recommended)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/anchor-paints.git
cd anchor-paints
```

2. Install dependencies:
```bash
npm install
```

### Development Mode

To run the project in development mode:

```bash
npm run dev
```

This will start both the frontend and backend servers. The application will be available at http://localhost:3000.

### Production Mode

To build the project for production:

```bash
npm run build
```

#### Running in Production

The production server scripts automatically set `NODE_ENV=production` for proper optimization.

##### On Windows:
```
start.bat
```

##### On Linux/Mac:
```bash
chmod +x start.sh   # Make the file executable (first time only)
./start.sh
```

##### Using Node directly:
For ES Modules (Linux/Mac):
```bash
node start.js
```

For CommonJS (Windows):
```
node production-server.js
```

The production server will run on port 5001 by default. You can access it at http://localhost:5001.

##### Troubleshooting:

If you encounter any issues with NODE_ENV not being set correctly:

1. Both server scripts (`simple-server.js` and `production-server.js`) explicitly set `NODE_ENV=production` internally
2. You can verify the environment by checking the console logs when starting the server
3. If needed, you can manually set the environment variable before running:
   
   **Windows (Command Prompt):**
   ```
   set NODE_ENV=production
   node production-server.js
   ```
   
   **Windows (PowerShell):**
   ```
   $env:NODE_ENV="production"
   node production-server.js
   ```
   
   **Linux/Mac:**
   ```bash
   NODE_ENV=production node start.js
   ```

## Project Structure

- `/client` - Frontend React application
- `/server` - Express server for API endpoints
- `/shared` - Shared types and schemas
- `/simple-server.js` - ES Modules production server
- `/production-server.js` - CommonJS production server for Windows compatibility
- `/start.js` - Cross-platform start script for ES Modules environments
- `/start.bat` - Windows batch file for starting the production server
- `/start.sh` - Linux/Mac shell script for starting the production server