#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Google Analytics tag
const gaTag = `        <!-- Google tag (gtag.js) -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-04B5H1S8SJ"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-04B5H1S8SJ');
        </script>
        <script src="https://www.googleoptimize.com/optimize.js?id=OPT-PHBLQWB"></script>
`;

// LinkedIn follow icon
const linkedInIcon = `    <a class="btn pull-left js-toolbar-action" aria-label="" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=nsubramanya"><i class="fa fa-linkedin fa-align-justify"></i></a>\n`;

// Get all HTML files in _book directory
function getAllHtmlFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      getAllHtmlFiles(filePath, fileList);
    } else if (file.endsWith('.html')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

// Inject tags into HTML file
function injectTags(filePath) {
  console.log(`Processing: ${filePath}`);
  
  let content = fs.readFileSync(filePath, 'utf8');
  
  // Inject GA tag after <head>
  if (!content.includes('gtag.js')) {
    content = content.replace(/<head>/i, `<head>\n${gaTag}`);
  }
  
  // Inject LinkedIn icon after <!-- Title -->
  if (!content.includes('followMember=nsubramanya')) {
    content = content.replace(/<!-- Title -->/i, `<!-- Title -->\n${linkedInIcon}`);
  }
  
  fs.writeFileSync(filePath, content, 'utf8');
}

// Main execution
try {
  const bookDir = path.join(__dirname, '..', '_book');
  
  if (!fs.existsSync(bookDir)) {
    console.error('Error: _book directory not found. Please run "npm run build" first.');
    process.exit(1);
  }
  
  const htmlFiles = getAllHtmlFiles(bookDir);
  console.log(`Found ${htmlFiles.length} HTML files to process\n`);
  
  htmlFiles.forEach(injectTags);
  
  console.log('\n✅ Successfully injected tracking tags into all HTML files!');
} catch (error) {
  console.error('Error:', error.message);
  process.exit(1);
}

