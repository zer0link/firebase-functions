const functions = require('firebase-functions');
const sendMessage = require('./send-gcm').sendMessage;
const admin = require('firebase-admin');
admin.initializeApp(functions.config().firebase);

// Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions

// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });

exports.doThings = functions.database.ref('DeviceLocation/{id}').onWrite((change,context) => {
    // functions.database.ref('Event').push(ev);
    admin.database().ref('firebaseEvent').set(context);
    return "success";
  });

exports.sendGCMNotification = functions.database.ref('DeviceLocation').onWrite((change,context) =>{
  sendMessage();
});
  