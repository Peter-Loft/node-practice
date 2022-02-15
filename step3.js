'use strict';

const argv = process.argv;
const axios = require("axios");
const fsP = require('fs/promises');



// CR: may be better in future and next step to RETURN the contents

/**this async function takes in a realtive path
 * and console logs the content inside of that path
  */
async function cat(path) {
  try {
    const fileContents = await fsP.readFile(path, "utf8");
    console.log("Files contents: ", fileContents);
    return fileContents;
  }
  catch (err) {
    console.error("Files contents failed: ", err);
    process.exit(1);
  }
}

/**this async function takes in a URL path
 * and console logs the content inside of the site
 */
async function webCat(url) {
  try {
    const fileContents = await axios.get(url);
    console.log("URL contents: ", fileContents);
    // writeToFile(writeFrom);
  }
  catch (err) {
    console.error("URL contents failed: ", err);
    process.exit(1);
  }
}

/** */
async function writeToFile(writeTo, writeFrom) {
  try {
    const fileContents = await fsP.writeFile(writeTo, writeFrom, "utf8");
    console.log("URL contents: ", fileContents);
  }
  catch (err) {
    console.error("Writing contents failed: ", err);
    process.exit(1);
  }
}

//CR: HTTP:// might be safer
if (argv[2].includes('--out')) {
  webCat(argv[4]);
} else {
  cat(argv[4]);
}