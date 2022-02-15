'use strict';

const argv = process.argv;
const axios = require("axios");
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
    console.log("Files contents failed: ", err);
    process.exit(1);
  }
}

/**this async function takes in a URL path
 * and returns the content inside of the site
 */
async function webCat(url){
  try {
    let fileContents = await axios.get(url);
    console.log("URL contents: ", fileContents);
  }
  catch (err) {
    console.log("URL contents failed: ", err);
    process.exit(1);
  }
}

if(argv[2].includes('://')){
  webCat(argv[2]);
}else{
  cat(argv[2]);
}