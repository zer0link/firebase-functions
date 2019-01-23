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


 var regTokens = ['dl3oGK_Xirs:APA91bGnbVyJdM8CSOJkRHc2knjx1YlxPRzCIhVvvlRx3_ybd2Fczca4LjHKLh_OeoF0bob'];

const sendMessage = () =>{
    sender.send(message, regTokens, 1, function (err, response) {
        if (err) console.error("Fail to send " + err);
        else console.log(response);
    });
} 

module.exports = sendMessage;