const fs = require("fs");
// console.log(global);
// console.log(__dirname);
// console.log(__filename);
// console.log(process.cwd());
// console.log(process.argv.slice(2));

// if(process.argv.slice(2)[0] == "-n"){
//     fs.mkdirSync(process.argv.slice(2)[1])
// }

// console.log(process.pid); //process ids

// process.stdin, process.stdout, process.stderr
// console.log(process.moduleLoadList);


//GENERATE RANDOM CONTENT
// const content = Math.random().toString(36).repeat(10000000);

//WRITE CONTENT TO FILE ~130MB data
// fs.writeFileSync(__dirname+"/bigFile.txt", content);
//o/p:bigFile.txt is created with some content

const http = require("http");
const server = http.createServer();

server.listen(3000, () => {
    console.log("server started at port 3000");
});

server.on("request", (req, res) => {
    fs.readFile("./bigFile.txt", (err, data) => {
        if(err) console.log(err);
        res.end(data);
        
    })
})