var gcm = require('node-gcm');

var sender = new gcm.Sender('AAAAarUr780:APA91bEMkl1uTlfVMvoHOqUI6hkKE9iyZzaNUhmYsz9epna9GNEHnuKoUBTP7jioK0-ML9d29k3TxVUHGygNjxhzjhd6rt00Sr7448aHBYWuJzm6za7Do6w7Srirdvf-n4k5tl0r424H');
// var message = new gcm.Message({
//     data: { key1: 'msg1' }
// });

var message = new gcm.Message();
message.addNotification({
    title: 'Alert!!!',
    body: 'Abnormal data access',
    icon: 'drawable-hdpi-icon',
    image: 'drawable-hdpi-icon',
    alert: 'true',
    sound: 'true'
});


 var regTokens = ['eITSjt15ZFk:APA91bGXw2XvbCjgQ7Nx-1hvzJTcKg1uyKgG6pf2Syc9EmnQgX_F9vKhizo0UtiluMKn5nWM42LtNdtI8VJLSZbaFEjm2Py1z0M5-9Uf3y97RxIpJ_n3XFWO-8HYS54Ab_kwmGvZN8-G'];

const sendMessage = () =>{
    sender.send(message, regTokens, 1, function (err, response) {
        if (err) console.error("Fail to send " + err);
        else console.log(response);
    });
    return 0;
} 

const doSomething = () =>{
    return 0;
}

module.exports = {
    sendMessage: sendMessage,
    dosomething: doSomething
}