// PM2 configuration for production deployment
module.exports = {
  apps: [{
    name: 'anchor-paints-website',
    script: 'server/index.js',
    instances: 1,
    autorestart: true,
    watch: false,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    env_production: {
      NODE_ENV: 'production',
      PORT: 5000
    },
    error_file: './logs/err.log',
    out_file: './logs/out.log',
    log_file: './logs/combined.log',
    time: true
  }],

  deploy: {
    production: {
      user: 'ubuntu',
      host: 'your-ec2-instance-ip',
      ref: 'origin/main',
      repo: 'git@github.com:your-username/anchor-paints-website.git',
      path: '/var/www/anchor-paints-website',
      'pre-deploy-local': '',
      'post-deploy': 'npm install && npm run build && pm2 reload ecosystem.config.js --env production',
      'pre-setup': ''
    }
  }
};