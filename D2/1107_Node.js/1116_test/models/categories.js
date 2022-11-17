const db = require('./model.js');

module.exports = {
    getClass(){
        return new Promise((resolve,reject)=>{
            db.query("select * from `categories`",function(err,rs){
                if(err){
                    reject(err)
                }else{
                    resolve(rs);
                }
            });
        });
    }
}

