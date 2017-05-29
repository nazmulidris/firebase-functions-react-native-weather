var functions = require('firebase-functions');

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

let _helloWorld = (req, res) => {
  res.send("Hola world " + Math.random().toString(36).substring(7));
};

exports.helloWorld = functions.https.onRequest(
  (request, response) => {
    _helloWorld(req, res);
  });
