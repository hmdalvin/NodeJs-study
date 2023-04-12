const { MongoClient } = require("mongodb");
var ObjectID = require("mongodb").ObjectID;

const uri = "mongodb://127.0.0.1:27017";
const dbName = "wpu";

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client) => {
    if (error) {
        return console.log("Koneksi gagal!");
    }

    // pilih database
    const db = client.db(dbName);

    // menambahkan 1 data ke collection mahasiswa
    // db.collection('mahasiswa').insertOne(
    //     {
    //         nama: "dimas",
    //         email: "dimas@gmail.com"
    //     },
    //     (error, result) => {
    //         if (error) {
    //             return console.log('gagal menambahkan data!');
    //         }
    //         console.log(result);
    //     }
    // );

    // Menambahkan lebih dari 1 data
    // db.collection('mahasiswa').insertMany(
    //     [
    //         {
    //             nama: 'Lucky',
    //             email: 'lucky@gmail.com'
    //         },
    //         {
    //             nama: 'muk',
    //             email: 'muk@gmail.com'
    //         }
    //     ],
    //     (error, result) => {
    //         if (error) {
    //             return console.log('gagal menambahkan data!');
    //         }
    //         console.log(result);
    //     }
    // );

    // menampilkan semua data yang ada di collection 'mahasiswa'
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     .find({ _id: ObjectID("6434f2b0cba8b71b1cdcef16")})
    //     .toArray((error, result) => {
    //         console.log(result);
    //     })
    // );

    // menampilkan data berdasarkan kriteria yang ada di collection 'mahasiswa'
    // console.log(
    //     db
    //     .collection('mahasiswa')
    //     .find({ nama: "Erik"})
    //     .toArray((error, result) => {
    //         console.log(result);
    //     })
    // );

    // // mengubah data berdasarkan id
    // const updatePromise = db.collection('mahasiswa').updateOne(
    //     {
    //         _id: ObjectID("6434f2b0cba8b71b1cdcef17"),
    //     },
    //     {
    //         $set: {
    //             nama: 'Rizalmuk',
    //         },
    //     }
    // );

    // updatePromise.then((result) => {
    //     console.log(result);
    // })
    // .catch((error) => {
    //     console.log(error);
    // });

    // mengubah data lebih dari 1, berdasarkan kriteria
    // db.collection('mahasiswa').updateMany(
    //     {
    //         nama: 'Erik',
    //     },
    //     {
    //         $set: {
    //             nama: 'Erik Doank',
    //         }
    //     }
    // );

    // menghapus 1 data
    db.collection("mahasiswa")
    .deleteOne({
        _id: ObjectID("6434f177912820188402145c"),
    }).then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });

    // menghapus lebih dari 1 data
    db.collection("mahasiswa")
    .deleteMany({
        nama: 'Erik Doank',
    }).then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });
});
