const db = require('../../database/index.js');

module.exports = {

  calender: {
    get: function (date, callback) {
      let sqlQuery = 'SELECT * FROM  entries WHERE date = ?';
      db.query(sqlQuery, [date],function(err, results) {
        if(err){ throw Error }
        callback(err, results[0]);
      });
    }
  },
  recentFive: {
    get: function (callback) {
      let sqlQuery = 'SELECT * FROM entries AS e ORDER BY e.date DESC LIMIT 5';
      db.query(sqlQuery, function(err, results) {
        if(err){
         throw Error
        }else{
          callback(err, results)
        }
      });
    }
  },
  journal: {
    //fetching top 5 enteries sorted by date
    post: function (inputArr, callback) {
      let sqlQuery = `REPLACE INTO entries (journal_entry, user_id, anger, fear, joy, sadness, analytical, confident, tentative, date) VALUES (?,?,?,?,?,?,?,?,?,?);`;
      db.query(sqlQuery, inputArr, function(err, results) {
        if(err){
          console.log(err)
        }
        console.log("Result", results)
      });
    }
  }
};

