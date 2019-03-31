const models = require('../models');
const watson = require('../api/watsonAPI')

module.exports = {

  calendar: {
    get: function (req, res) {
      let date = req.query.data
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
      watson.walsonNLU(data, function(error, response){
        if(error){
          console.log(error)
        }else{
          // console.log(response)
          // console.log(response.document_tone)
          let obj = {}
          for(let i = 0; i < response.document_tone.tones.length; i++){
            obj[response.document_tone.tones[i].tone_id] = response.document_tone.tones[i].score;
          }

          let inputArr = [];
          inputArr.push(data)
          inputArr.push('dhpatel15')
          for(let i =0; i < 7; i ++){

            if(i === 0){
              if(obj.hasOwnProperty('anger')){
                inputArr.push(obj.anger)
              }else{
                inputArr.push(0)
              }
            }

            if(i === 1){
              if(obj.hasOwnProperty('fear')){
                inputArr.push(obj.fear)
              }else{
                inputArr.push(0)
              }
            }

            if(i === 2){
              if(obj.hasOwnProperty('joy')){
                inputArr.push(obj.joy)
              }else{
                inputArr.push(0)
              }
            }

            if(i === 3){
              if(obj.hasOwnProperty('sadness')){
                inputArr.push(obj.sadness)
              }else{
                inputArr.push(0)
              }
            }

            if(i === 4){
              if(obj.hasOwnProperty('analytical')){
                inputArr.push(obj.analytical)
              }else{
                inputArr.push(0)
              }
            }

            if(i === 5){
              if(obj.hasOwnProperty('confident')){
                inputArr.push(obj.confident)
              }else{
                inputArr.push(0)
              }
            }

            if(i === 6){
              if(obj.hasOwnProperty('tentative')){
                inputArr.push(obj.tentative)
              }else{
                inputArr.push(0)
              }
            }
          }
          inputArr.push(req.body.date)


          console.log(inputArr)

          models.journal.post(inputArr, (err, results) =>  {
            if (err) { throw Error }
            res.status(200);
          });
        }
      })

}}};

      