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
  }
  catch (err) {
    console.error("Files contents failed: ", err);
    process.exit(1);
  }
}

/**this async function takes in a URL path
 * and console logs the content inside of the site
 */
async function webCat(url){
  try {
    const fileContents = await axios.get(url);
    console.log("URL contents: ", fileContents);
  }
  catch (err) {
    console.error("URL contents failed: ", err);
    process.exit(1);
  }
}
//CR: HTTP:// 
if(argv[2].includes('://')){
  webCat(argv[2]);
}else{
  cat(argv[2]);
}