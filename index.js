import chalk from "chalk";
import fs from "fs";

function handleError(err) {
  throw new Error(chalk.red(err.code, "There is no file on the path"));
}

async function getFile(filePath) {
  try {
    const encoding = "utf-8";
    const text = await fs.promises.readFile(filePath, encoding);
    console.log(chalk.green(text));
  } catch (err) {
    handleError(err);
  } finally {
    console.log(chalk.yellow("Job done!"));
  }
}

// function getFile(filePath) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(filePath, encoding)
//     .then((text) => console.log(chalk.green(text)))
//     .catch((err) => handleError(err));
// }

// function getFile(filePath) {
//   const encoding = "utf-8";
//   fs.readFile(filePath, encoding, (err, data) => {
//     if (err) {
//       handleError(err);
//     } else {
//       console.log(chalk.green(data));
//     }
//   });
// }

getFile("./files/markdown-syntax.md");
