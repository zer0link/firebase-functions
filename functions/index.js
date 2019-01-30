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
    var registrationToken = "<registration token here>";

    var topic = "finance";

    admin.messaging().subscribeToTopic('eITSjt15ZFk:APA91bGXw2XvbCjgQ7Nx-1hvzJTcKg1uyKgG6pf2Syc9EmnQgX_F9vKhizo0UtiluMKn5nWM42LtNdtI8VJLSZbaFEjm2Py1z0M5-9Uf3y97RxIpJ_n3XFWO-8HYS54Ab_kwmGvZN8-G', topic)
      .then(function(response) {
        console.log("Successfully subscribed to topic:", response);
      })
      .catch(function(error) {
        console.log("Error subscribing to topic:", error);
      });
  
    
    const payload = {
      notification: {
        title: 'You have a new follower!',
        body: `I am now following you.`
      }
    };
  
    // Listing all tokens as an array.
    tokens = ['eITSjt15ZFk:APA91bGXw2XvbCjgQ7Nx-1hvzJTcKg1uyKgG6pf2Syc9EmnQgX_F9vKhizo0UtiluMKn5nWM42LtNdtI8VJLSZbaFEjm2Py1z0M5-9Uf3y97RxIpJ_n3XFWO-8HYS54Ab_kwmGvZN8-G'];
  
    return admin.messaging().sendToTopic('finance', payload);
  });

exports.sendGCMNotification2 = functions.database.ref('DeviceLocation').onWrite((change,context) =>{
  const payload = {
    notification: {
      title: 'You have a new follower2!',
      body: `I am now following you.`
    }
  };

  // Listing all tokens as an array.
  tokens = ['eITSjt15ZFk:APA91bGXw2XvbCjgQ7Nx-1hvzJTcKg1uyKgG6pf2Syc9EmnQgX_F9vKhizo0UtiluMKn5nWM42LtNdtI8VJLSZbaFEjm2Py1z0M5-9Uf3y97RxIpJ_n3XFWO-8HYS54Ab_kwmGvZN8-G'];

  return admin.messaging().sendToDevice(tokens, payload);
});

// exports.sendMessage = functions.database.ref('DeviceLocation').onWrite((change,context) =>{
//   doSomething;
//   return 0;
// });
  