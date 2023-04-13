const express = require('express');
const expressLayouts = require('express-ejs-layouts');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const flash = require('connect-flash');

require('./utils/db');
const Contact = require('./model/contact');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

// third party middleware
app.use(expressLayouts);

// Built-in middleware
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));

// konfigurasi flash
app.use(cookieParser('secret'));
app.use(
    session({
        cookie: { maxAge: 6000 },
        secret: 'secret',
        resave: true,
        saveUninitialized: true,
    })
);

app.use(flash());

// Halaman home
app.get('/', (req, res) => {
    const mahasiswa = [
        {
            nama: 'Alfin',
            email: 'alfin@gmail.com'
        },
        {
            nama: 'erik',
            email: 'erik@gmail.com'
        },
        {
            nama: 'dody',
            email: 'dody@gmail.com'
        },
    ];
    res.render('index', {
        nama : 'Ahmad Alfian',
        title: 'Halaman Home',
        mahasiswa,
        layout: 'layouts/main-layout',
    });
});

app.get('/about', (req, res) => {
    res.render('about', {
        layout: 'layouts/main-layout',
        title: 'Halaman About',
    });
});

app.get('/contact', async (req, res) => {
    
    const contacts = await Contact.find();

    res.render('contact', {
        layout: 'layouts/main-layout',
        title: 'Halaman Contact',
        contacts,
        msg: req.flash('msg'),
    });
});

// halaman detail contact
app.get('/contact/:nama', async (req, res) => {
    // const contact = findContact(req.params.nama);
    const contact = await Contact.findOne({ nama: req.params.nama});
    
    res.render('detail', {
        layout: 'layouts/main-layout',
        title: 'Halaman Detail Contact',
        contact,
    });
});

app.listen(port, () => {
    console.log(`Mongo Contact App | listening app http://localhost:${port}`);
});