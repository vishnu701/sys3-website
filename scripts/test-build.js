/**
 * This script can be used to test the production build locally
 * before deploying to GitHub Pages. It performs basic checks
 * to ensure the build is ready for deployment.
 */

const fs = require('fs');
const path = require('path');
const http = require('http');
const { exec } = require('child_process');

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m'
};

// Check if dist directory exists
const checkDistDirectory = () => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync('dist')) {
      console.log(`${colors.red}${colors.bright}Error: 'dist' directory not found!${colors.reset}`);
      console.log(`${colors.yellow}Run 'npm run build' first before testing${colors.reset}`);
      reject(new Error('dist directory not found'));
      return;
    }
    
    console.log(`${colors.green}✓ 'dist' directory exists${colors.reset}`);
    resolve();
  });
};

// Check if index.html exists in dist
const checkIndexFile = () => {
  return new Promise((resolve, reject) => {
    if (!fs.existsSync(path.join('dist', 'index.html'))) {
      console.log(`${colors.red}${colors.bright}Error: 'dist/index.html' not found!${colors.reset}`);
      reject(new Error('index.html not found'));
      return;
    }
    
    console.log(`${colors.green}✓ 'dist/index.html' exists${colors.reset}`);
    resolve();
  });
};

// Check for critical assets
const checkCriticalAssets = () => {
  return new Promise((resolve, reject) => {
    const criticalFiles = ['assets/index', 'favicon.ico'];
    const missingFiles = [];
    
    for (const file of criticalFiles) {
      // Use glob pattern to match files that start with the pattern
      const files = fs.readdirSync('dist', { recursive: true });
      const found = files.some(f => {
        if (typeof f === 'string') {
          return f.includes(file);
        }
        return f.includes(file);
      });
      
      if (!found) {
        missingFiles.push(file);
      }
    }
    
    if (missingFiles.length > 0) {
      console.log(`${colors.red}${colors.bright}Error: Critical assets missing: ${missingFiles.join(', ')}${colors.reset}`);
      reject(new Error('Missing critical assets'));
      return;
    }
    
    console.log(`${colors.green}✓ All critical assets found${colors.reset}`);
    resolve();
  });
};

// Temporarily serve the build and open in browser
const serveBuild = () => {
  return new Promise((resolve) => {
    console.log(`${colors.blue}${colors.bright}Starting test server...${colors.reset}`);
    
    const server = http.createServer((req, res) => {
      let filePath = path.join('dist', req.url === '/' ? 'index.html' : req.url);
      
      // Handle directory requests
      if (!path.extname(filePath)) {
        filePath = path.join(filePath, 'index.html');
      }
      
      // Check if file exists
      fs.access(filePath, fs.constants.F_OK, (err) => {
        if (err) {
          // If file doesn't exist, serve index.html (for SPA routing)
          filePath = path.join('dist', 'index.html');
        }
        
        // Determine content type
        const extname = path.extname(filePath);
        let contentType = 'text/html';
        
        switch (extname) {
          case '.js':
            contentType = 'text/javascript';
            break;
          case '.css':
            contentType = 'text/css';
            break;
          case '.json':
            contentType = 'application/json';
            break;
          case '.png':
            contentType = 'image/png';
            break;
          case '.jpg':
          case '.jpeg':
            contentType = 'image/jpeg';
            break;
          case '.svg':
            contentType = 'image/svg+xml';
            break;
        }
        
        // Read and serve the file
        fs.readFile(filePath, (err, content) => {
          if (err) {
            res.writeHead(500);
            res.end(`Server Error: ${err.code}`);
            return;
          }
          
          res.writeHead(200, { 'Content-Type': contentType });
          res.end(content, 'utf-8');
        });
      });
    });
    
    const PORT = 3000;
    server.listen(PORT, () => {
      console.log(`${colors.green}Test server running at http://localhost:${PORT}${colors.reset}`);
      console.log(`${colors.yellow}Press Ctrl+C to stop the server${colors.reset}`);
      
      // Open in default browser
      const openCommand = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
      exec(`${openCommand} http://localhost:${PORT}`);
      
      // Keep server running for testing
      console.log(`${colors.magenta}${colors.bright}Server will remain running for testing. Press Ctrl+C to exit.${colors.reset}`);
    });
    
    // Never resolve this promise, let the user Ctrl+C to exit
    // resolve() is never called intentionally
  });
};

// Run all checks in sequence
const runTests = async () => {
  try {
    console.log(`${colors.bright}${colors.blue}=== Testing production build ===${colors.reset}\n`);
    
    await checkDistDirectory();
    await checkIndexFile();
    await checkCriticalAssets();
    
    console.log(`\n${colors.green}${colors.bright}✓ All checks passed! Build is ready for deployment.${colors.reset}\n`);
    
    await serveBuild();
  } catch (error) {
    console.log(`\n${colors.red}${colors.bright}✗ Build verification failed.${colors.reset}\n`);
    console.log(`${colors.yellow}Fix the issues and run the build process again.${colors.reset}`);
    process.exit(1);
  }
};

runTests();