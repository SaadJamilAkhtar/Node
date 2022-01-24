const util = require('util')
const {readFile, writeFile} = require('fs')

// use util to convert into promise

const readFilePromise = util.promisify(readFile)
const writeFilePromise = util.promisify(writeFile)

const start = async () => {
    try {
        const first = await readFilePromise("./BuiltInModules/test1.txt", 'utf8');
        const second = await readFilePromise("./BuiltInModules/test2.txt", 'utf8');
        console.log(first)
        console.log(second)
        await writeFilePromise("./fileWritten_app_promise_util.txt", `Hello world! ${first} : ${second}`,
            {flag: "a"})
    } catch (e) {
        console.log(e)
    }
}

start()

