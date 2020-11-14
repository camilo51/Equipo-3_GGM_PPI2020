const express = require('express');
const router = express.Router();
const mysqlConnection = require('./../db/db');

router.get('/', (req, res)=> {
  res.json('Hola mundo');
});

router.get('/usuarios',(req, res)=>{
  mysqlConnection.query('SELECT * FROM `usuarios`', (err, rows, fields)=>{
    if(!err){
      res.json(rows);
      console.log(fields);
    }else{
      res.json(err);
    }
  })
});

module.exports = router;
// router.get('/usuarios',(req,res)=>{
//   mysqlConnection.query('SELECT * FROM `usuarios`', (err,rows,fields)=>{
//     if (!err) {
//       res.json(rows);
//       console.log(fields);
//     } else {
//       res.json(err);
//     }
//   })
// });
