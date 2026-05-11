const fs = require('fs');
const path = require('path');

function walkthrough(dir) {
    const list = fs.readdirSync(dir);
    for (const file of list) {
        const fullPath = path.join(dir, file);
        if (fs.statSync(fullPath).isDirectory()) {
            walkthrough(fullPath);
        } else if (fullPath.endsWith('.tsx') || fullPath.endsWith('.ts') || fullPath.endsWith('.css')) {
            let content = fs.readFileSync(fullPath, 'utf8');
            let modified = false;
            
            // Replace old off-white with new base
            if (content.includes('#F4F1EC')) {
                content = content.replace(/#F4F1EC/g, '#F5F1EB');
                modified = true;
            }
            
            // Replace old dark vinho with new terracota
            if (content.includes('#6A3A3A')) {
                content = content.replace(/#6A3A3A/g, '#8C5A4A');
                modified = true;
            }

            if (modified) {
                fs.writeFileSync(fullPath, content, 'utf8');
                console.log(`Updated ${fullPath}`);
            }
        }
    }
}

walkthrough('./src');
