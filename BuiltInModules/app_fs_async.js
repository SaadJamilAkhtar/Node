const {readFile, writeFile} = require('fs')

writeFile("./asyncWrite.txt", 'Hello from async file', (err) => {
    if (err) {
        console.log("err in writing file");
        console.log(err);
    } else {
        readFile("./asyncWrite.txt", 'utf8', (err, res) => {
            if (err) {
                console.log(err);
            } else {
                console.log(res);
            }
        })
    }
})

readFile("./test1.txt", 'utf8', (err, res) => {
    if (err) {
        console.log(err);
    } else {
        console.log(res);
    }
})

