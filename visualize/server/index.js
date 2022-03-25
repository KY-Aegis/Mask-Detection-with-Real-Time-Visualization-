const express = require('express');
const app = express();
const mysql = require('mysql');
var cors = require('cors')
app.use(cors());

const db = mysql.createConnection({
    host : 'localhost',
    user : 'root',
    password : '123456',
    database : 'projects'
});

app.get('/villages',(req,res) => {
    db.query('Select * from ml order by Time_Stamp desc limit 1', (err, results)=>{
        if (err) {
            console.log(err);
        }
        else{
            res.send(results);
        }
    })
})

app.listen(3001,()=> {
    console.log('grats!')
});
