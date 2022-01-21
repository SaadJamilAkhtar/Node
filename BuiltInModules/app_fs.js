const {readFileSync, writeFileSync} = require('fs')

const file1 = './test1.txt'
const file2 = './test2.txt'

const first = readFileSync(file1, 'utf8')
const second = readFileSync(file2, 'utf8')

console.log(first)
console.log(second)

const newFile = writeFileSync("newFile.txt", "Hello from newFile",
    {flag: 'a'})

console.log(readFileSync("./newFile.txt", 'utf8'))