const fs = require("fs");

//read a file
//non blocking file operations
// fs.readFile("f1.txt",'utf-8', (err, data) => {
//     if(err){
//         console.log(err);
//         return;
//     }else{
//         console.log(data);
//     }
// })

//write a file
// const content = "Hello world";
// fs.writeFile('f2.txt', content, 'utf-8', (err) => { //'f2.txt 'Helloworld and creates a f2.txt file with the content Hellow world
//     //if we again replace it with f1.txt then the content in the f1.txt is changed into Hello World same as f2.txt
//     if(err){
//         console.log(err);
//         return;
//     }
// })

// fs.writeFileSync 
//it is a synchronous function, it blocks the node js event loop

//working with directories
//fs.readdir() //read directory
//fs.stat() //what we are reading currently

//fs.rename -> can be used to rename files
//and moves files to different location
// fs.rename('f1.txt','./text/newF1.txt', (err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File has been renamed"); //file will be renamed and prints "File has been renamed"
// });

//remove or delete a file
// fs.unlink('./text/newF1.txt',(err) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log("File has been removed");
// })

//fs.stat() -> provides info about file's status, including it size, permissions, modifications timestamp
// fs.stat("text", (err, stats) => {
//     if(err){
//         console.log(err);
//         return;
//     }
//     console.log(stats.size);
//     console.log(stats.isDirectory());
// })

//fs.watch()
//fs.watchFile()

// //fs.mkdir() //make directory
// const directoryName = 'my-directory';
// fs.mkdir(directoryName, (err) => {
//     if(err){
//         console.error(`Error creating directory: ${err}`);
//     }else{
//         console.log(`Directory "${directoryName}" created successfully.`); //my directory is created
//     }
// });

//fs.rmdir() //remove directory
// const directoryName = 'my-directory';
// fs.rmdir(directoryName, (err) => {
//     if(err){
//         console.error(`Error removing directory: ${err}`);
//     }else{
//         console.log(`Directory "${directoryName}" removed successfully.`); //my directory is created
//     }
// });
//{recursive:true} -> directory and It's contents are deleted recursively

//fs.existsSync checks if a directory exists or not
// const filePath = "./my-directory/f2.txt";
// if(fs.existsSync(filePath)){
//     console.log("the filepath exists");
// }
// else console.log("the file path doesn't exists"); 

//fs.existsAsync checks if a directory exists or not
const filePath = "./my-directory/f2.txt";
fs.access(filePath, fs.constants.F_OK, (err) => {
    if(err){
        console.log("the filepath does not exixts");
    }
    console.log("the filepath exists");
})