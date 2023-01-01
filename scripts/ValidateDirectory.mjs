import path from "path";
import { globby } from "globby";


function validateFolderSpecialCharacters(filePath, fileName) {
  // check for special characters with regex
  const regex = new RegExp(/[^a-zA-Z]/);
  if (regex.test(filePath)) {
    throw new Error(
      `Folder name '${filePath}' contains special characters. Please remove them.`
    );
  }
  if (regex.test(fileName)) {
    throw new Error(
      `File name '${fileName}' contains special characters. Please remove them.`
    );
  }
}

function validateFolderAndFileNames(filePath, fileName) {
  if (filePath === "src") {
    throw new Error("Folder name cannot be 'src'");
  }
  if (fileName.toLowerCase() !== filePath.toLowerCase()) {
    throw new Error(
      `Folder name '${filePath}' does not match file name '${fileName}'`
    );
  }
}

function pathsToMarkdown(filePaths) {
  for (let filepath of filePaths) {
    let filename = path.basename(filepath).split(".")[0];
    filepath = path.dirname(filepath);
    filepath = filepath.replace("src/algorithms/", "");
    filepath = filepath.split("/")[1];

    validateFolderSpecialCharacters(filepath, filename);
    validateFolderAndFileNames(filepath, filename);
  }
  return filePaths;
}

// get paths of all .ts files - excluding node_modules, the .github folder, tests and config stuff
globby([
  "src/algorithms/**/*.ts",
  "!(node_modules|.github)/**/*",
  "!**/__test__/**/*",
  "!**/*.test.ts",
  "!*.config.ts",
])
  // create markdown content
  .then(pathsToMarkdown);
