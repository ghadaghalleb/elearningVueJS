var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'elearning'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM matieres';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM matieres WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (matiere,next)=>{
        let sql = 'INSERT INTO matieres SET ?'
        db.query(sql,matiere,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,matiere,next)=>{
        let sql = `UPDATE matieres SET nom_matiere=? WHERE id=${id}`

        db.query(sql,matiere.nom_matiere,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM matieres WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}