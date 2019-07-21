var api = require('../helpers/api');

exports.getOrders = function(data, cb){
    // Using GET method to retrive orders
    api.baseRequest.get({
        url: 'http://api.uniexpress.ca/orders', 
        qs: data
    }, function(error, response, body) {
        if(cb){
            //pass into callback
            //you can use promise or async/await instead of this callback
            cb(error, JSON.parse(body));
        }
    })
}

exports.getOrderById = function(id, cb){
    // Using GET method to retrive orders by id
    api.baseRequest.get({
        url: 'http://api.uniexpress.ca/orders/' + id
    }, function(error, response, body) {
        if(cb){
            //Error handling
            if(response && response.statusCode !== 200){
                error = response;
            }
            //pass into callback
            //you can use promise or async/await instead of this callback
            cb(error, JSON.parse(body));
        }
    })
}

exports.createAnOrder = function(form, cb){
    api.baseRequest.post({
        url: 'http://api.uniexpress.ca/orders',
        form
    }, function(error, response, body){
        if(cb){
            //pass into callback
            //you can use promise or async/await instead of this callback
            cb(error, body);
        }
    })
}

exports.getShippingFee = function(form, cb){
    api.baseRequest.post({
        url: 'http://api.uniexpress.ca/orders/shipping_fee',
        form
    }, function(error, response, body){
        if(cb){
            //pass into callback
            //you can use promise or async/await instead of this callback
            cb(error, JSON.parse(body));
        }
    })
}

exports.changeFee = function(form, cb){
    api.baseRequest.post({
        url: 'http://api.uniexpress.ca/orders/change_fee',
        form
    }, function(error, response, body){
        if(cb){
            //pass into callback
            //you can use promise or async/await instead of this callback
            cb(error, JSON.parse(body));
        }
    });
}