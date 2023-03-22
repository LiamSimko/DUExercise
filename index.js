const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;
const livereload = require("livereload");

const jsonParser = bodyParser.json();

if (app.get("env") === "development") {
  const liveReloadServer = livereload.createServer();
  liveReloadServer.watch(__dirname + "/public");
  app.use(require("connect-livereload")());
  liveReloadServer.server.once("connection", () => {
    setTimeout(() => {
      liveReloadServer.refresh("/");
    }, 100);
  });
}

app.use(express.static("public"));

app.post("/form", jsonParser, (req, res) => {
  console.log(req.body);
  res.send("OK");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
