import * as fs from "fs";
import * as path from "path";
import clipboard from "clipboardy";

const folderPath = "./src/styles";
const subFolderPath = "./src/styles/pages";
const allowedExtensions = [".txt", ".css", ".js", ".html"];

async function readFolder(folder) {
    let content = "";

    try {
        const files = await fs.promises.readdir(folder);

        const matchedFiles = files.filter((file) =>
            allowedExtensions.includes(path.extname(file))
        );

        for (const file of matchedFiles) {
            content += `${file}: \`\n`;
            const filePath = path.join(folder, file);
            const fileContent = await fs.promises.readFile(filePath, "utf8");
            content += fileContent + "`\n";
        }
    } catch (err) {
        console.error(`Error reading folder ${folder}:`, err);
    }

    return content;
}

async function readTwoFiles(file1, file2) {
    const sendBack = true;
    let mainContent =
        `I’m using Tailwind CSS v4++ without a \`tailwind.config.js\` file.
Below are two parts of my codebase:

1. \`${file1}\`: global styles and utility definitions
2. \`${file2}\`: page-specific style overrides

Please review my Tailwind CSS usage from the perspective of a **senior frontend developer**.
Focus on:
- Utility class naming and file structure
- Whether I’m applying Tailwind principles effectively (like using \`@apply\`, minimizing duplication, separating concerns, etc.)
- Suggestions for better maintainability or readability
- Anything that could be improved to follow best practices

${sendBack ? `After your review, please provide **adjusted or improved code for each file separately** based on your recommendations.
Send me back the revised version of each file clearly labeled.` : ``}

Here’s the code content:\n\n`;

    const content1 = await readFolder(file1);
    mainContent += content1;

    mainContent += `\n\n---\n\n`;

    const content2 = await readFolder(file2);
    mainContent += content2;

    return mainContent;
}

// Call and copy to clipboard
(async () => {
    const mainContent = await readTwoFiles(folderPath, subFolderPath);
    clipboard.writeSync(mainContent);
    console.log("Copied content to clipboard!");
})();

