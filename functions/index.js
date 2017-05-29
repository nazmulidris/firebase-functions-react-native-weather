var functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

let _helloWorld = (req) => {
  return "Hola world " + Math.random().toString(36).substring(7) + "\n";
};

exports.helloWorld = functions.https.onRequest(
  (request, response) => {
    response.send(_helloWorld(request));
  });
