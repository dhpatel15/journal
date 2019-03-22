const models = require('../models');
const watson = require('../api/watsonAPI')

module.exports = {

  calendar: {
    get: function (req, res) {
      let date = req.query.date
      models.calender.get(date, (err, results) => {
        if (err) throw Error
        res.status(200).send(results);
      });
    }
  },

  recentFive: {
    get: function (req, res) {
      models.recentFive.get((err, results) =>  {
        if(err){
          throw Error
        }else{
          res.status(200).send(results)
        }
      });
    }
  },

  journal: {
    post: function (req, res) {
      const data = req.body.data
      watson.walsonNLU(data)
      models.journal.post( date, (err, results) =>  {
        if (err) { throw Error }
        res.status(200);
      });
    },
  }

};
