const mysql = require('mysql2');


let db = mysql.createConnection({
    host:'localhost',
    // port:3305,
    user:'root',
    password:'123456',
    database:'1116',
});

// const [goods] =  db.execute('SELECT * FROM `goods` ',[]);
// console.log(goods);

module.exports = db;