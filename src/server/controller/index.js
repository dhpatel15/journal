const models = require('../models');
const watson = require('../api/watsonAPI')

module.exports = {
  dates: {
    get: function (req, res) {
      let date = req.query.data
      models.calender.get(date, (err, results) => {
        if (err){
          res.status(422)
        }else{
          res.status(200).send(results);
        }
      });
    },

    post: function (req, res) {
      //try to change text to data? 
      const {data, date} = req.body;
      watson.walsonNLU(data, function(error, response){
        if(error){
          //send error message or something to client
          console.log(error)
          res.status(504);
        }else{

          let obj = {
            text: data,
            date, 
            user: 'user'
          }

          const {tones} = response.document_tone

          for(let i = 0; i < tones.length; i++){
            obj[tones[i].tone_id] = tones[i].score;
          }

          models.journal.post(obj, (err, results) => {
            if (err) { 
              res.status(422) 
            }else{
              res.status(201).send();
            }
          })
        }
      })
    }
  }
};

      