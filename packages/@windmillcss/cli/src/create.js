const ncp = require("ncp");
const { promisify } = require("util");
const path = require("path");
const fs = require("fs");
const prettier = require("prettier");

const copy = promisify(ncp);

function createProjectModifier(projectPath) {
  return function (fileName, modifier) {
    const filePath = path.join(projectPath, fileName);
    let data = require(filePath);
    data = modifier(data);
    fs.writeFileSync(
      filePath,
      prettier.format(JSON.stringify(data), { parser: "json" })
    );
  };
}

async function create(projectName) {
  const projectPath = path.join(process.cwd(), projectName);

  await copy(path.join(__dirname, "./template"), projectPath, {
    clobber: false,
  });

  const modify = createProjectModifier(projectPath);

  modify("package.json", (data) => {
    data.name = projectName;
    return data;
  });

  modify("src/index.json", (data) => {
    data.name = projectName;
    data.version = "1.0.0";
    return data;
  });

  console.log("Ready to go!");
  console.log(`Run: cd ${projectName}; npm install`);
}

module.exports = (...args) => {
  return create(...args).catch((err) => {
    console.log(err);
    process.exit(1);
  });
};
