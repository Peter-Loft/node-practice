
const argv = process.argv;

const fsP = require('fs/promises');

async function cat(path) {
  try {
    let fileContents = await fsP.readFile(path, "utf8");
    console.log("Files contents: ", fileContents);
  }
  catch (err) {
    process.exit(1);
  }
}

cat(argv[2]);