const EventEmitter = require("events");

const customEmitter = new EventEmitter()

customEmitter.on("response", () => {
    console.log(`data received `)
});
customEmitter.on("response", () => {
    console.log(`Different logic `)
});

customEmitter.emit("response");