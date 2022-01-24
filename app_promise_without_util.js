const {readFile, writeFile} = require("fs").promises

const run = async () => {
    try {
        const first = await readFile("./BuiltInModules/test1.txt", 'utf8');
        const second = await readFile("./BuiltInModules/test2.txt", 'utf8');
        console.log(first)
        console.log(second)
        await writeFile("./output_promise_without_util.txt",
            `Hello world!!! ${first} ${second}`,
            {flag: "a"});
    } catch (e) {
        console.log(e);
    }
}
run()