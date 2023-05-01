const fs = require("fs");

const privateKey = fs.readFileSync(__dirname + "/../private.pk");

module.exports = privateKey;
