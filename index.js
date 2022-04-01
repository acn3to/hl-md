import chalk from "chalk";
import fs from "fs";

function handleError(err) {
  throw new Error(chalk.red(err.code, "There is no file on the path"));
}

function getFile(filePath) {
  const encoding = "utf-8";
  fs.readFile(filePath, encoding, (err, data) => {
    if (err) {
      handleError(err);
    } else {
      console.log(chalk.green(data));
    }
  });
}

getFile("./files/markdown-syntax.md");
