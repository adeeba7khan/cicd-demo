const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/health") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ status: "healthy" }));
    return;
  }

  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello from my CI/CD application!");
});

server.listen(3000, () => {
  console.log("Application running on port 3000");
});
