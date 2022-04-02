import chalk from "chalk";
import getFile from "./index.js";
import validateUrl from "./http-validation.js";

const path = process.argv;

async function processText(filePath) {
  const result = await getFile(filePath[2]);
  if (path[3] === "validate") {
    console.log(chalk.yellow("Valaidated links"), validateUrl(result));
  } else {
    console.log(chalk.yellow("Links list:"), result);
  }
}

processText(path);
