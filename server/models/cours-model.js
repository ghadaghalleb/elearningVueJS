var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'elearning'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM cours';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM cours WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (cours,next)=>{
        let sql = 'INSERT INTO cours SET ?'
        db.query(sql,cours,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,cours,next)=>{
        let sql = `UPDATE cours SET nom_cours=? WHERE id=${id}`

        db.query(sql,cours.nom_cours,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM cours WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}