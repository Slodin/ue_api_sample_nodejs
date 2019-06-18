var express = require('express');
var router = express.Router();
var SMS = require('../models/sms');


router.get('/send', function(req, res) {
    //Example data
    data = {
        orderid: 108993,
        tid: 1,
        lan: 2
    }
    SMS.sendSMS(data, function(err, response){
        //do your error handling and other functions if needed
        res.send(response);
    })
});

module.exports = router;