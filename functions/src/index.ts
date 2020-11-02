import * as functions from 'firebase-functions';
import jsonData = require('./restaurants.json');

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", {structuredData: true});
  response.send("Hello from Firebase!");
});

export const data = functions.https.onRequest((request, response) => {
    functions.logger.info("getting data for restaurants!", {structuredData: true});
    // send the restaurant.json data
    // parae json data
    // response.send(restaurant object)

    let data = JSON.stringify(jsonData);
    response.send(data);
  });
  

