const data = require('./data.js')

console.log(`Hello ${data["person"]["name"]}`)

for (i = 0; i < data["items"].length; i++) {
    console.log(data["items"][i]);
}