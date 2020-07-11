const express = require("express");
const path = require("path");
const fs = require("fs");
const request = require("request");
const postcss = require("postcss");
const chokidar = require("chokidar");
const nunjucks = require("nunjucks");

const app = express();
const port = 9991;

const http = require("http").createServer(app);
const io = require("socket.io")(http);

const dirPath = path.join(process.cwd(), "src");
nunjucks.configure(dirPath, { noCache: true });

app.get("/", (req, res) => {
  const metadata = { ...require(dirPath) };

  metadata.components = metadata.components.map(({ name, path: filePath }) => {
    return {
      name,
      fileName: path.basename(filePath),
      content: nunjucks.render(path.join(dirPath, filePath)),
    };
  });

  res.send(metadata);
});

app.get("/styles.css", (req, res) => {
  const customFilePath = path.join(dirPath, "tailwind.css");
  fs.existsSync(customFilePath)
    ? fs.readFile(customFilePath, (err, css) => {
        postcss([require("tailwindcss"), require("autoprefixer")])
          .process(css)
          .then((result) => {
            res.setHeader("Content-Type", "text/css");
            res.send(result.css);
          });
      })
    : request("https://unpkg.com/tailwindcss@^1.0/dist/tailwind.min.css").pipe(
        res
      );
});

io.on("connection", (socket) => {
  chokidar.watch(process.cwd()).on("change", (event, path) => {
    socket.emit("change");
  });
});

http.listen(port, () =>
  console.log(`Server running at http://localhost:${port}`)
);
