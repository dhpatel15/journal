const ToneAnalyzerV3 = require('watson-developer-cloud/tone-analyzer/v3');

const credentials = require('../../../config.js')

const walsonNLU = (data, callback) => {
  const toneAnalyzer = new ToneAnalyzerV3({
    version: '2018-10-20',
    username: credentials.username,
    password: credentials.password,
    url: 'https://gateway.watsonplatform.net/tone-analyzer/api'
  });

  const toneParams = {
    'tone_input': { 'text': data },
    'content_type': 'application/json'
  }

  toneAnalyzer.tone(toneParams, function (error, toneAnalysis) {
    if (error) {
      console.log(error);
    } else {
      callback(error, toneAnalysis, null, 2);
    }
  });
}


module.exports.walsonNLU = walsonNLU;