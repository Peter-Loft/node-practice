'use strict';

const argv = process.argv;

const fsP = require('fs/promises');

/**this async function takes in a realtive path
 * and returns the content inside of that path
  */
async function cat(path) {
  try {
    let fileContents = await fsP.readFile(path, "utf8");
    console.log("Files contents: ", fileContents);
  }
  catch (err) {
    console.log(err);
    process.exit(1);
  }
}

cat(argv[2]);