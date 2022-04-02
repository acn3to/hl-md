import chalk from "chalk";
import getFile from "./index.js";

const path = process.argv;

async function processText(filePath) {
  const result = await getFile(filePath[2]);
  console.log(chalk.yellow("Links list:"), result);
}

processText(path);
