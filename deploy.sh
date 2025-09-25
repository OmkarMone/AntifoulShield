#!/bin/bash

# Anchor Paints Website Deployment Script for EC2
# This script builds and prepares the application for production deployment

set -e  # Exit on any error

echo "🚀 Starting Anchor Paints Website Deployment Build..."

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Function to print colored output
print_status() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

print_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    print_error "Node.js is not installed. Please install Node.js 20+ and npm."
    exit 1
fi

# Check Node version
NODE_VERSION=$(node -v | cut -d'.' -f1 | sed 's/v//')
if [ "$NODE_VERSION" -lt 18 ]; then
    print_error "Node.js version must be 18 or higher. Current version: $(node -v)"
    exit 1
fi

print_status "Node.js version: $(node -v)"
print_status "NPM version: $(npm -v)"

# Clean previous builds
print_status "Cleaning previous builds..."
rm -rf dist
rm -rf node_modules/.cache

# Install dependencies
print_status "Installing dependencies..."
npm ci --only=production

# Install development dependencies (needed for build)
print_status "Installing build dependencies..."
npm install --only=dev

# Build the application
print_status "Building the application..."
npm run build

# Verify build output
if [ ! -d "dist" ]; then
    print_error "Build failed - dist directory not found"
    exit 1
fi

if [ ! -f "dist/index.js" ]; then
    print_error "Build failed - server bundle not found"
    exit 1
fi

print_status "Build completed successfully!"

# Create production package
print_status "Creating production package..."

# Create deployment directory
mkdir -p deploy-package
cp -r dist deploy-package/
cp package.json deploy-package/
cp package-lock.json deploy-package/
cp ecosystem.config.js deploy-package/
cp Dockerfile deploy-package/

# Copy server files that might be needed
mkdir -p deploy-package/server
cp -r server/*.ts deploy-package/server/ 2>/dev/null || true

# Create logs directory
mkdir -p deploy-package/logs

# Create production environment file template
cat > deploy-package/.env.production << EOF
# Production Environment Variables for Anchor Paints Website
NODE_ENV=production
PORT=5000

# Database Configuration (if needed)
# DATABASE_URL=your_database_url_here

# Security Settings
SESSION_SECRET=your_secure_session_secret_here

# Application Settings
APP_NAME=Anchor Paints Website
APP_VERSION=1.0.0
EOF

# Create startup script for EC2
cat > deploy-package/start-production.sh << 'EOF'
#!/bin/bash

# Production startup script for EC2
set -e

echo "Starting Anchor Paints Website in production mode..."

# Check if PM2 is installed
if ! command -v pm2 &> /dev/null; then
    echo "Installing PM2..."
    npm install -g pm2
fi

# Load environment variables
if [ -f ".env.production" ]; then
    export $(cat .env.production | xargs)
fi

# Create logs directory
mkdir -p logs

# Start the application with PM2
pm2 start ecosystem.config.js --env production

# Save PM2 configuration
pm2 save

# Display status
pm2 status

echo "✅ Anchor Paints Website started successfully!"
echo "🌐 Application is running on port 5000"
echo "📊 Monitor with: pm2 monit"
echo "📋 View logs with: pm2 logs anchor-paints-website"
EOF

chmod +x deploy-package/start-production.sh

# Create installation script for EC2
cat > deploy-package/install-ec2.sh << 'EOF'
#!/bin/bash

# EC2 Installation Script for Anchor Paints Website
set -e

echo "🚀 Installing Anchor Paints Website on EC2..."

# Update system
sudo apt-get update

# Install Node.js 20.x
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt-get install -y nodejs

# Install PM2 globally
sudo npm install -g pm2

# Create application directory
sudo mkdir -p /var/www/anchor-paints-website
sudo chown -R $USER:$USER /var/www/anchor-paints-website

# Copy application files (run this after uploading the package)
# cp -r * /var/www/anchor-paints-website/

# Install dependencies
cd /var/www/anchor-paints-website
npm ci --only=production

# Setup PM2 to start on boot
pm2 startup
sudo env PATH=$PATH:/usr/bin /usr/lib/node_modules/pm2/bin/pm2 startup systemd -u $USER --hp $HOME

# Configure Nginx (optional)
echo "📋 Next steps:"
echo "1. Upload the deployment package to /var/www/anchor-paints-website/"
echo "2. Run: chmod +x start-production.sh"
echo "3. Run: ./start-production.sh"
echo "4. Configure Nginx as reverse proxy (optional)"
echo "5. Setup SSL certificate (recommended)"

echo "✅ EC2 setup completed!"
EOF

chmod +x deploy-package/install-ec2.sh

# Create Nginx configuration template
cat > deploy-package/nginx.conf << 'EOF'
# Nginx configuration for Anchor Paints Website
# Place this in /etc/nginx/sites-available/anchor-paints-website
# Then create symlink: sudo ln -s /etc/nginx/sites-available/anchor-paints-website /etc/nginx/sites-enabled/

server {
    listen 80;
    server_name your-domain.com www.your-domain.com;  # Replace with your domain

    # Security headers
    add_header X-Frame-Options DENY;
    add_header X-Content-Type-Options nosniff;
    add_header X-XSS-Protection "1; mode=block";
    add_header Referrer-Policy "strict-origin-when-cross-origin";

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_min_length 1024;
    gzip_types
        text/plain
        text/css
        text/xml
        text/javascript
        application/javascript
        application/xml+rss
        application/json;

    # Static files
    location /assets/ {
        alias /var/www/anchor-paints-website/dist/client/assets/;
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Proxy to Node.js application
    location / {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
        proxy_redirect off;
    }

    # Health check endpoint
    location /health {
        proxy_pass http://localhost:5000/health;
        access_log off;
    }
}

# HTTPS configuration (uncomment after SSL setup)
# server {
#     listen 443 ssl http2;
#     server_name your-domain.com www.your-domain.com;
#
#     ssl_certificate /path/to/your/certificate.crt;
#     ssl_certificate_key /path/to/your/private.key;
#
#     # SSL configuration
#     ssl_protocols TLSv1.2 TLSv1.3;
#     ssl_ciphers ECDHE-RSA-AES256-GCM-SHA512:DHE-RSA-AES256-GCM-SHA512:ECDHE-RSA-AES256-GCM-SHA384:DHE-RSA-AES256-GCM-SHA384;
#     ssl_prefer_server_ciphers off;
#
#     # Same configuration as HTTP server
#     # ... (copy all location blocks from above)
# }
EOF

# Create README for deployment
cat > deploy-package/README-DEPLOYMENT.md << 'EOF'
# Anchor Paints Website - Deployment Guide

## Quick Start for EC2 Deployment

### 1. Upload to EC2
Upload the entire `deploy-package` folder to your EC2 instance:

```bash
scp -r deploy-package ubuntu@your-ec2-ip:/home/ubuntu/
```

### 2. Install Dependencies on EC2
```bash
ssh ubuntu@your-ec2-ip
cd deploy-package
chmod +x install-ec2.sh
./install-ec2.sh
```

### 3. Start the Application
```bash
chmod +x start-production.sh
./start-production.sh
```

### 4. Configure Firewall
```bash
# Allow HTTP and HTTPS traffic
sudo ufw allow 80
sudo ufw allow 443
sudo ufw allow 22  # SSH
sudo ufw enable
```

### 5. Optional: Setup Nginx Reverse Proxy
```bash
sudo apt install nginx
sudo cp nginx.conf /etc/nginx/sites-available/anchor-paints-website
sudo ln -s /etc/nginx/sites-available/anchor-paints-website /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx
```

## PM2 Commands

- **Start**: `pm2 start ecosystem.config.js`
- **Stop**: `pm2 stop anchor-paints-website`
- **Restart**: `pm2 restart anchor-paints-website`
- **Monitor**: `pm2 monit`
- **Logs**: `pm2 logs anchor-paints-website`
- **Status**: `pm2 status`

## Environment Variables

Edit `.env.production` file to configure:
- `NODE_ENV=production`
- `PORT=5000`
- `SESSION_SECRET=your_secure_secret`

## Security Features Included

✅ Content Security Policy (CSP)
✅ XSS Protection
✅ CSRF Protection
✅ Security Headers
✅ Input Sanitization
✅ HTML Injection Protection

## Monitoring

The application includes:
- Health check endpoint: `/health`
- PM2 process monitoring
- Log rotation
- Error tracking

## SSL/HTTPS Setup

For production, configure SSL:
1. Obtain SSL certificate (Let's Encrypt recommended)
2. Update Nginx configuration
3. Redirect HTTP to HTTPS

## Support

For issues or questions, refer to the application documentation or contact the development team.
EOF

print_status "Production package created in 'deploy-package' directory"

# Display summary
echo ""
echo "🎉 Deployment package created successfully!"
echo ""
echo "📦 Package contents:"
echo "   • Built application (dist/)"
echo "   • Production dependencies"
echo "   • PM2 configuration"
echo "   • Docker configuration"
echo "   • EC2 installation scripts"
echo "   • Nginx configuration template"
echo "   • Environment configuration"
echo "   • Deployment documentation"
echo ""
echo "📋 Next steps:"
echo "   1. Upload 'deploy-package' to your Git repository"
echo "   2. Deploy to EC2 using the provided scripts"
echo "   3. Configure domain and SSL certificate"
echo ""
echo "🌐 Your Anchor Paints website is ready for production!"

# Optionally create a tarball for easy transfer
print_status "Creating deployment archive..."
tar -czf anchor-paints-website-deployment.tar.gz deploy-package/
print_status "Created: anchor-paints-website-deployment.tar.gz"

echo ""
echo "✅ Deployment build completed successfully!"