const fs = require("fs");

const code = fs.readFileSync("tiny-enc.min.js").toString();
fs.writeFileSync("tiny-enc.module.min.js", code.replace(/window\.tinyEnc=/g, "export default ").slice(6, -5));