const fs = require('fs');
const readJSON = function () {
  const dataBuffer = fs.readFileSync('sample.json');
  let data = JSON.parse(dataBuffer.toString());
  data.name = "Paul";
  data.age = 46;
  console.log(data);
  return data;
};

module.exports = readJSON;