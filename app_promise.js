const {readFile} = require('fs');

const fileContent = (path) => {
    return new Promise((res, rej) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                rej(err);
            } else {
                res(data);
            }
        });
    });
}

fileContent("./BuiltInModules/test1.txt").then( data => console.log(data) ).catch( err => console.log(err) );
fileContent("./BuiltInModules/test2.txt").then( data => console.log(data) ).catch( err => console.log(err) );
fileContent("./BuiltInModules/newFile.txt").then( data => console.log(data) ).catch( err => console.log(err) );