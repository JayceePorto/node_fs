const fs = require ("fs");
const path = require('path');

let fileNames = ["createFile", "readFile", "updateFile", "deleteFile"];
let fileExt = "./js";
let fileTemplate = `constfs = require("fs")`;

fileNames.forEach((name) => {
    fs.writeFile(
        path.join(__dirname, `./${name}${fileExt}`), 
        fileTemplate, 
        (err) => {
            if(err) {
                console.error(err)
                console.log(`Falied to write to ${name}${fileExt} x`);
             } else {
                 console.log(`Successfull to write to ${name}${fileExt}`);
             }
        
        
        }
})