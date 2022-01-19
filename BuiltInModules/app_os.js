const os = require("os")
// info about current user
const user = os.userInfo()
console.log(user)

// uptime of system
console.log(`System uptime ${os.uptime() / (60 * 60)} hours`)


const currentOs = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}

console.log(currentOs)