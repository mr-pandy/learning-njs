const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    fs.readFile("./views/index.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(data);
    });
  } else if ((req.url = "/about")) {
    fs.readFile("./views/about.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(data);
    });
  } else if ((req.url = "/contact")) {
    fs.readFile("./views/contact.html", (err, data) => {
      if (err) throw err;
      res.writeHead(200, { "Content-Type": "text/html" });
      return res.end(data);
    });
  } else {
    fs.readFile("./views/404.html", (err, data) => {
      if (err) throw err;
      res.writeHead(404, { "Content-Type": "text/html" });
      return res.end(data);
    });
  }
});

server.listen(8080);
