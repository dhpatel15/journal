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
  journal: {
    post: function({text, date, user, anger = 0, fear = 0, joy = 0, sadness = 0, analytical = 0, confident = 0, tentative = 0}, callback) {

      const inputArr = [text, user, anger, fear, joy, sadness, analytical, confident, tentative, date];
      let sqlQuery = `REPLACE INTO entries (journal_entry, user_id, anger, fear, joy, sadness, analytical, confident, tentative, date) VALUES (?,?,?,?,?,?,?,?,?,?);`;
      db.query(sqlQuery, inputArr, function(err, results) {
        if(err){
          console.log(err)
        }
        callback()
      });
    }
  }
};

