const mysql = require('mysql');
const mysqlConnection = mysql.createConnection({
  host:'bjalrr0nrg2wzotrjuxt-mysql.services.clever-cloud.com',
  user:'uebdqdbbkjmg0lez',
  password:'Y6PypHX30wDsigHB9Pt4',
  database:'bjalrr0nrg2wzotrjuxt',
  multipleStatements: true
})

mysqlConnection.connect(function(err){
  if (err) {
    console.log(err);
  }else {
    console.log('database conectada');
  }
});

module.exports = mysqlConnection;
