const fs = require('fs-extra');

try {

  const package = JSON.parse(fs.readFileSync("./package.json"));
  fs.copySync("dist/" + package.name, "builder/src/main/resources/webapp/", {

    filter: (src, dest) => (!src.endsWith(".gz") && !src.endsWith(".map"))
  });

  fs.removeSync('dist');
  fs.mkdirSync('dist');
} catch (error) {

  process.exit(1);
}

console.log('Finished Copying Dist Files to Builder.');