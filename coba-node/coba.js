// Sychronous

// const getUserSync = (id) => {
//     // let name = '';
//     // if( id === 1) {
//     //     nama = 'Sandika';
//     // } else {
//     //     nama = 'Galih';
//     // }
//     const nama = id === 1 ? 'Sandhika' : 'Galih';
//     return {id, nama};
// };

// const userSatu = getUserSync(1);
// console.log(userSatu);

// const userDua = getUserSync(2);
// console.log(userDua);

// const halo = 'Hello World!';
// console.log(halo);

// Asynchronous
const getUserSync = (id, cb) => {
    const time = id === 1 ? 3000 : 2000;
    setTimeout(()=> {
        const nama = id === 1 ? 'Sandhika' : 'Galih';
        cb({id, nama});
    }, time);
};

const userSatu = getUserSync(1, (hasil) => {
    console.log(hasil);
});

const userDua = getUserSync(2, (hasil) => {
    console.log(hasil);
});

const halo = 'Hello World!';
console.log(halo);