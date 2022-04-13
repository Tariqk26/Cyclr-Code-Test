const fs = require('fs');
const transformData = require('./transformData')

const json = fs.readFileSync('./rawData.json')

const data = transformData(json)
console.log(JSON.stringify(data, null, 2))