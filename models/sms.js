var api = require('../helpers/api');

exports.sendSMS = function(data, cb){
    // Using GET method to reuqest auth
    api.baseRequest.get({
        url: 'http://api.uniexpress.ca/sms/' + data.orderid + '/' + data.tid
    }, function(error, response, body) {
        if(cb){
            //pass into callback
            //you can use promise or async/await
            cb(error, JSON.parse(body));
        }
    })
}