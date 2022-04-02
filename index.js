import chalk from "chalk";
import fs from "fs";

function getLink(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const resultsArray = [];
  let temp;

  while ((temp = regex.exec(text)) != null) {
    resultsArray.push({ [temp[1]]: temp[2] });
  }
  return resultsArray;
}

function handleError(err) {
  throw new Error(chalk.red(err.code, "There is no file on the path"));
}

async function getFile(filePath) {
  try {
    const encoding = "utf-8";
    const text = await fs.promises.readFile(filePath, encoding);
    console.log(getLink(text));
  } catch (err) {
    handleError(err);
  } finally {
    console.log(chalk.yellow("Job done!"));
  }
}

getFile("./files/markdown-syntax.md");
