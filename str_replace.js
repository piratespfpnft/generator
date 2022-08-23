const path = require('path');
const fs = require('fs');
//joining path of directory 
const directoryPath = path.join(__dirname, 'build/json');
//passsing directoryPath and callback function

function readFile(file) {
    const contents = fs.readFileSync(file, 'utf-8');
    var result = contents.replace(/NewUriToReplace/g, 'QmdCG8rDJYYPq8FA22WyXuBAdDjSPHf4HHqx8pTQ6WsLs7');
  
    fs.writeFile(file, result, 'utf8', function (err) {
       if (err) return console.log(err);
    });
}


fs.readdir(directoryPath, function (err, files) {
    //handling error
    if (err) {
        return console.log('Unable to scan directory: ' + err);
    } 
    //listing all files using forEach
    files.forEach(function (file) {
        // Do whatever you want to do with the file
        console.log(file); 
        readFile('build/json/'+file);
    });
});

