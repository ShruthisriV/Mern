//GENERATE RANDOM CONTENT
// const content = Math.random().toString(36).repeat(10000000);

//WRITE CONTENT TO FILE ~130MB data
// fs.writeFileSync(__dirname+"/bigFile.txt", content);
//o/p:bigFile.txt is created with some content

//it is created to print the created content on the webpage const http = require("http");
const fs = require("fs");
const path = require("path");
const http = require("http");
const server = http.createServer();

server.listen(3000, () => {
  console.log("server started at port 3000");
});

server.on("request", (req, res) => {
  // fs.readFile("./bigFile.txt", (err, data) => {
  //   if (err) console.log(err);
  //   res.end(data);
  // });

  const readableStream = false.createReadStream("./bigFile.txt");
  //res csn handle writable stream
  // Http request/response, crypto, and some methods on the fs module are internally stream-enabled
  readableStream.pipe(res);
});

// solution: streaming

//generate random content
// const content = Math.random().toString(36).repeat(10000000);

//write content to file  ~ 130MB data
// fs.writeFileSync(__dirname+"/bigFile.txt", content);

// const fs = require("fs");
// const http = require("http");
// const server = http.createServer();
// const path = require("path");

// server.listen(3000, () => {
//   console.log("server started at port 3000");
// });

// server.on("request", (req, res) => {
//     fs.readFile("./bigFile.txt", (err, data) => {
//         if(err) console.log(err);
//         res.end(data);

//     })
// })

// solution : streaming

const filePath = path.join(__dirname, "bigFile.txt");
console.log(filePath);
const readableStream = fs.createReadStream(filePath);
const writableStream = fs.createWriteStream("copyOfBigFile.txt");

// readableStream.on("data", (chunk) => {
//   console.log(`Recived ${chunk.length} bytes of data`);
// });

// readableStream.on("data", (chunk) =>{
//     console.log(`Recived ${chunk.length} bytes of data`);
//     writableStream.write(chunk);
// });

// readableStream.on("end", () => {
//     writableStream.end();
//     console.log("finished readin the file");
// });

//pipe -> method on readable stream . used to connect reable stream to writable stream

// readableStream.pipe(writableStream);

// readableStream.on('error', (err) => {
//     console.log("Error while reading", err);
// })

// writableStream.on('error', (err) => {
//     console.log("Error while writing", err);
// })

// readableStream.on("end", () => {
//   console.log("finished readin the file");
// });
