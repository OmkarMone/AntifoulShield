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

To run the production build:

#### On Linux/Mac:
```bash
./start.sh
```

#### On Windows:
```bash
start.bat
```

Or directly with Node:
```bash
NODE_ENV=production PORT=5001 node simple-server.js
```

The production server will run on port 5001 by default. You can access it at http://localhost:5001.

## Project Structure

- `/client` - Frontend React application
- `/server` - Express server for API endpoints
- `/shared` - Shared types and schemas
- `/simple-server.js` - Production server for serving the built static files
