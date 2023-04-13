const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/wpu', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true, 
});

// // menambah 1 data
// const contact1 = Contact({
//     nama: 'Dody',
//     nohp: '0823526273723',
//     email: 'dody@gmail.com'
// });

// contact1.save().then((contact) => console.log(contact));