var chalk = require("chalk");

var message = chalk.underline.bgGreen("Hello ") + chalk.bgMagenta("World");
console.log(message);