var mysql = require('mysql');
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'express_sql'
  });

  
module.exports = {
    selectAll : async (next)=>{
        let sql = 'SELECT * FROM posts';
        db.query(sql, (err, result) => {
            if (err) throw err;
            next(result)
        });
    },
    selectById : async (id,next)=>{
        let sql = 'SELECT * FROM posts WHERE id = ?'
        db.query(sql,id,(err,result) => {
            if(err) throw err
            next(result[0])
        })
    },
    insert : async (post,next)=>{
        let sql = 'INSERT INTO posts SET ?'
        db.query(sql,post,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    update : async (id,post,next)=>{
        let title = post.title ? `title='${post.title}'` : null;
        let body = post.body ? `body='${post.body}'` : null;

        let data = title && body ? title+','+body : title ? title : body

        let sql = `UPDATE posts SET ${data} WHERE id=${id}`

        db.query(sql,(err, result) => {
            if (err) throw err;
            next(result)
        })
    },
    delete : async (id,next)=>{
        let sql = `DELETE FROM posts WHERE id=${id}`
        db.query(sql,(err,result) => {
            if(err) throw err;
            next(result)
        })
    }
}