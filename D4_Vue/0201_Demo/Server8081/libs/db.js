const mysql = require("mysql2/promise");

let db;
~async function (){
    db = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'123456',
        database:'0201_uploadphoto',
    })
}()

module.exports = db;