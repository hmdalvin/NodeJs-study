const validator = require('validator');
const chalk = require('chalk');

// console.log(validator.isEmail('aafian@gmail.com'));
// console.log(validator.isMobilePhone('0852345678', 'id-ID'));
// console.log(validator.isNumeric('0852345678'));
const nama = 'Alfian';
console.log(chalk.italic.bgBlue.black('Hello World!'));
const pesan = chalk`Lorem, ipsum dolor {bgRed.black.bold sit amet} consectetur {bgGreen.italic.black adipisicing} elit. ab, rem. Nama saya : ${nama}`;
console.log(pesan);