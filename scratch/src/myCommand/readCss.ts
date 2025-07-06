import * as fs from "fs";
import * as path from "path";
import clipboard from "clipboardy";

const folderPath = "./src/styles";
const subFolderPath = "./src/styles/pages";
const allowedExtensions = [".txt", ".css", ".js", ".html"];

async function readFolder(folder: string): Promise<string> {
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

async function readTwoFiles(file1: string, file2: string): Promise<string> {
  let mainContent =
    "This is my tailwindcss version 4.0++ that doesn't have .config file:\n";

  const content1 = await readFolder(file1);
  mainContent += content1;

  mainContent += "And this is my specific pages customize:\n";

  const content2 = await readFolder(file2);
  mainContent += content2;

  mainContent +=
    "How can I improve my code. Can you give me the advice in the sight of senior dev?";

  return mainContent;
}

// Call and copy to clipboard
(async () => {
  const mainContent = await readTwoFiles(folderPath, subFolderPath);
  clipboard.writeSync(mainContent);
  console.log("Copied content to clipboard!");
})();
