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

If you encounter ENOTSUP errors when starting the server:

1. This is usually related to IPv6/IPv4 binding issues on Windows. Try these alternative methods:

   **Method 1**: Modify the port binding to use a different port
   ```
   set PORT=3000
   node production-server.js
   ```

   **Method 2**: Try using hostname 'localhost' instead of IP address
   Edit production-server.js and simple-server.js to change:
   ```javascript
   // Change this line:
   const server = app.listen(PORT, '0.0.0.0', () => {
   
   // To:
   const server = app.listen(PORT, () => {
   ```

   **Method 3**: Run as administrator or use a port number above 1024

## Project Structure

- `/client` - Frontend React application
- `/server` - Express server for API endpoints
- `/shared` - Shared types and schemas
- `/simple-server.js` - ES Modules production server
- `/production-server.js` - CommonJS production server for Windows compatibility
- `/start.js` - Cross-platform start script for ES Modules environments
- `/start.bat` - Windows batch file for starting the production server
- `/start.sh` - Linux/Mac shell script for starting the production server
## Troubleshooting ENOTSUP Errors

If you encounter "ENOTSUP" (operation not supported) errors when starting the server, especially on Windows:

1. **The server files have been updated to work on most systems** by removing explicit host binding.
   The server will now bind to all available network interfaces automatically.

2. **If you still have issues, try using a different port:**
   ```
   set PORT=3000
   node production-server.js
   ```

3. **Run PowerShell or Command Prompt as administrator** for better access to network interfaces.

4. **Make sure no other application is using the same port**. Check with:
   ```
   netstat -ano | findstr :5001
   ```

5. **Firewall settings** may affect binding behavior. Consider allowing the Node.js application through your firewall.
