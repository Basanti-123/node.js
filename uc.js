// create a nodejs server that prints hello word
/*
3 types 
1. inbuilt nodejs modules (http, fs, os, path)
2. Custom nodejs modules (create your own by using js)
3. npm package (library use)
*/

const http = require("http"); // nodejs inbuilt package
const myMoudles = require("./myCustomModule"); // my own custom module
const upperCase = require("upper-case");

http
  .createServer((req, res) => {
    res.writeHead(200, { "content-type": "text/html" }); // html tag
    // calling my own custom module methods
    const date = myMoudles.myDate();
    const myTime = myMoudles.myTime();
    const FullYear = myMoudles.FullYear();
    const myName = upperCase.upperCase("Basanti");
    res.write(
      "<h1> Hello world, " +
        myName +
        "</h1> <p>" +
        date +
        "</p><p>" +
        myTime +
        "</p><p>" +
        FullYear +
        "</p>"
    ); // body
    res.end();
  })
  .listen(5555);

console.log("App is running on port 5555");

// localhost: 5555 in browser // run the file
