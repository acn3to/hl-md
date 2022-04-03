import fs from "fs";
import chalk from "chalk";

function getLink(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const resultsArray = [];
  let temp;

  while ((temp = regex.exec(text)) != null) {
    resultsArray.push({ [temp[1]]: temp[2] });
  }
  return resultsArray.length === 0 ? "There is no links" : resultsArray;
}

function handleError(err) {
  throw new Error(chalk.red(err.code, "There is no file on the path"));
}

export default async function getFile(filePath) {
  try {
    const encoding = "utf-8";
    const text = await fs.promises.readFile(filePath, encoding);
    return getLink(text);
  } catch (err) {
    handleError(err);
  } finally {
    console.log(chalk.yellow("Job done!"));
  }
}
