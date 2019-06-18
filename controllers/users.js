var express = require('express');
var router = express.Router();
var User = require('../models/user');


router.get('/oauth2', function(req, res) {
    //Example client data
    client = {
        grant_type: 'client_credentials',
        client_id: '100002',
        client_secret: 'nmTXcJNnc0r8MTWFYEJ8gKROGxuB2YiN'
    }
    User.authenticate(client, function(err, response){
        //do your error handling and other functions if needed
        //error handling example
        if(err){
            res.status(err.statusCode).send(JSON.parse(err.body));
            return -1;
        }
        //use the response object to get your token
        //in this case, it's reponse.data.access_token
        //then you need to store this token somewhere to use it later
        res.send(response);
    })
});

module.exports = router;
