const EventEmitter = require("events");

const customEmitter = new EventEmitter()

customEmitter.on("response", () => {
    console.log(`Different logic `)
});

customEmitter.on("response", () => {
    console.log(`data received `)
});

customEmitter.on("response", (name, num) => {
    console.log(`data received ${num} : ${name}`)
});

customEmitter.emit("response", "John", 34);