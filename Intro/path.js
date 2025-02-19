const { log } = require("console");
const path = require("path");

//method joins multiple path into a single path . 
let path1="/Intro"
let path2="my-directory/f2.txt"

// console.log(path1 + "/" + path2);
const fullPath = path.join(path1, path2);
path.join(fullPath);

//path.resolve() resolves with the absolute path
const absolutePath = path.resolve('folder',"subfolder","subsubfolder","file.txt");
console.log(absolutePath);

//get filename
const fileName = path.basename(absolutePath);
console.log(fileName);

//get foldername
const dirName = path.dirname(absolutePath);
console.log(dirName)

//get extension name
const extName = path.extname(absolutePath);
console.log(extName);

//path.parse -> parses a path string into an object with properties like root, dir, base, name and ext
const pathInfo = path.parse(absolutePath);
console.log(pathInfo);

//it normalize the path by resolving "..", '..' segments and converting slashes to the appropriate platform format
const normalizePath = path.normalize("my-directory/../text/f1.txt");
console.log(normalizePath);

//path.isAbsolute(path) -> check if a path is an absolute path
const isAbsolute = path.isAbsolute("my-directory/text/f1.txt")
console.log(isAbsolute);

//path.relative -> returns the relative path from one path to another
//how to access this path ("/path/to") from this path("/path/from");
const relativePath = path.relative("/path/from","/path/to");
console.log(relativePath);

