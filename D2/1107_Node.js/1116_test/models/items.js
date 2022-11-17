const db = require('./model.js');

module.exports = {
    //获取数据
    getItem(){
        return new Promise((resolve,reject)=>{
            db.query("select * from `goods`",function(err,rs){
                if(err){
                    reject(err)
                }else{
                    resolve(rs);
                }
            });
        });
    },

    //添加数据
    addItem(newData){
        return new Promise((resolve,reject)=>{
            db.query("insert into `goods` (`id`,`title`,`sellNumber`,`price`,`favorRate`) values(?,?,?,?,?)",newData, function(err,rs){
                if(err){
                    reject(err)
                }else{
                    resolve(rs);
                }
            });
        });
    }
}

