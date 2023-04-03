// const nama = 'Ahmad Alfianto';
// const cetakNama = (nama) => `Hi, nama saya ${nama}`;
// console.log(cetakNama(nama));
// const fs = require('fs'); // core module
// const cetakNama = require('./coba'); // local module
// const moment = require('moment'); //third part module / npm module / node_modules

// console.log('Hello Fian');

const coba = require("./coba");

console.log(
    coba.cetakNama("Fian"),
    coba.PI,
    coba.mahasiswa.cetakMhs(),
    new coba.Orang()
);
