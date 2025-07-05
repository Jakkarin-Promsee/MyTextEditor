import * as fs from 'fs';
import * as path from 'path';
import clipboard from 'clipboardy';

const folderPath = "./src/styles";

// Define what file types you want to read
const allowedExtensions = ['.txt', '.css', '.js', '.html'];

var mainContent = "This is my tailwindcss version 4.0++:\n";

fs.readdir(folderPath, (err, files) => {
    if (err) {
        console.error('Error reading folder:', err);
        return;
    }

    const matchedFiles = files.filter(file =>
        allowedExtensions.includes(path.extname(file))
    );

    matchedFiles.forEach(file => {
        const filePath = path.join(folderPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        mainContent += "\n" + content;
    });

    mainContent += "How can I improve my code. Can you give me the advide in the sight of senior dev?"

    clipboard.writeSync(mainContent); // Copy to clipboard
    console.log('Copied content to clipboard!');
});
