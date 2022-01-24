const {readFile} = require('fs');
const {first_name} = require("./module/data");

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

// fileContent("./BuiltInModules/test1.txt").then( data => console.log(data) ).catch( err => console.log(err) );

const start = async () => {
    try {
        const first = await fileContent("./BuiltInModules/test1.txt");
        const second = await fileContent("./BuiltInModules/test2.txt");
        console.log(first)
        console.log(second)
    } catch (error) {
        console.log(error)
    }
}
start()