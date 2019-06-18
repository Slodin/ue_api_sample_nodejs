var request = require('request');

exports.authenticate = function(client, cb){
    // Using GET method to reuqest auth
    // Pass client data into query string, the following example is using request. If you are using any
    // other http request packages like http, https, ajax, or axios. Please refer to their package page
    // for addtional information on how to pass query strings.
    request.get({
        url: 'http://api.uniexpress.ca/oauth/token', 
        qs: client
    }, function(error, response, body) {
        if(cb){
            //Error handling
            if(response && response.statusCode !== 200){
                error = response;
            }
            //pass into callback
            //you can use promise or async/await
            cb(error, JSON.parse(body));
        }
    })
}