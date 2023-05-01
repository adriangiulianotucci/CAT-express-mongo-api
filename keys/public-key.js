const fs = require("fs");

const publicKey = fs.readFileSync(__dirname + "/../public.pub");

module.exports = publicKey;
