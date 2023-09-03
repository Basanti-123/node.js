//1. Generate QR Code for  the url on the terminal using package qrcode.

const http = require("http");
const QRCode = require("qrcode");

http
  .createServer(async (req, res) => {
    res.writeHead(200, { "content-type": "text/html" });
    const qrData = await QRCode.toDataURL("I am a pony!");
    console.log({ QRCode });
    res.write(`<img src='${qrData}'/>`);
    res.end();
  })
  .listen(5555);

console.log("App is running ");

//Generate QR Code for  the url on the terminal using package qrcode.
/*
const http = require("http");
const QRCode = require("qrcode");

const PORT = 5555;

http
  .createServer((req, res) => {
    QRCode.toDataURL("Raktim", function (err, url) {
      if (err) {
        res.writeHead(500, { "Content-Type": "text/plain" });
        res.end("Error generating QR code");
        return;
      }

      res.writeHead(200, { "Content-Type": "text/html" });
      res.end(`<img src="${url}" alt="QR Code"/>`);
    });
  })
  .listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  })*/
