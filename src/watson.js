import dotenv from 'dotenv';

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

dotenv.config({ silent: true });

const visualRecognition = new VisualRecognitionV3({
  version: '2018-03-19',
  iam_apikey: process.env.api_key,
});

export const classifyImage = (imageURL, res) => {
  const classifier = ['Hotdogorlegs_510058635'];
  const threshold = 0;

  const params = {
    url: imageURL,
    classifier_ids: classifier,
    threshold,
  };

  visualRecognition.classify(params, (err, response) => {
    if (err) {
      console.log(err);
      res.json(err);
    } else {
      console.log(JSON.stringify(response, null, 2));
      res.json(response);
    }
  });
};
