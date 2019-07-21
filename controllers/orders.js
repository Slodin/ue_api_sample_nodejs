var express = require('express');
var router = express.Router();
var Order = require('../models/order');


router.get('/list', function(req, res) {
    // Example client data
    // Please refer to our documentation page for more information
    // All param have default values, thus they are able to be left compeletely blank
    var data = {
        offset: 1,
        page_size: 50,
        order_type: 0,
        status: 'all',
        pay_status: 1,
        created_date_from: 'all',
        created_date_to: 'all'
    }

    Order.getOrders(data, function(err, response){
        //do your error handling and other functions if needed
        res.send(response);
    });
});

router.get('/list_by_id', function(req, res) {
    //Example id: use order_id not order_sn
    var id = 108993

    Order.getOrderById(id, function(err, response){
        //error handling example
        if(err){
            res.status(err.statusCode).send(JSON.parse(err.body));
            return -1;
        }
        res.send(response);
    });
});

router.post('/create', function(req, res){
    // Example form data
    // Please refer to our documentation page for more information
    var form = {
        order_type: 2,
        start_consignee: {
            consignee_name: '发件TEST',
            address: '出发地址',
            mobile: '1234567',
            sign_building: '著名景点',
            buzz_code: '123456',
            lng: -123.2231,
            lat: 34.01234
        },
        consignee: {
            consignee_name: '收件TEST',
            address: '收件人地址',
            mobile: '12345678',
            sign_building: '非著名景点',
            buzz_code: '123456',
            lng: -123.2231,
            lat: 34.01234
        },
        add_time: '2018-01-01 10:00:00',
        is_subscribe: 0,
        receive_time_label: '9:30PM - 10:00PM',
        postscript: '不要辣, 不要辣',
        pay_name: 'Credit Card Payment',
        payment_method: 7,
        goods_amount: 0.05,
        distance: 6,
        tax: 0.01,
        fee: 0,
        fee_per: 0,
        insure_fee: 0,
        order_amount: 0.02,
        shop_lng: -123.222,
        shop_lat: 32.222,
        partner_shop_name: '测试单子',
        line_items: [
            {
                goods_name: '商品名称',
                goods_number: 1,
                goods_price: 2.00,
                goods_attr: '白色, 大号'
            }
        ],
        pay_status: 2,
        shop_accept: 0,
        shipping_fee: 0.5,
        task_time: '10:00',
        task_speed: 0
    }

    Order.createAnOrder(req.body, function(err, response){
        //do your error handling and other functions if needed
        if(err){
            res.status(err.statusCode).send(JSON.parse(err.body));
            return -1;
        }
        res.status(200).send(response);
    });
});

router.post('/get_shipping_fee', function(req, res){
    //Example form data
    // Please refer to our documentation page for more information
    var form = {
        start_address: '10551 Shellbridge Way, Richmond, BC',
        start_lng: -123.1097372,
        start_lat: 49.1871337,
        address: '6541 No 5 Rd, Richmond, BC',
        lng: -123.0957394,
        lat: 49.1652818,
        distance: 3.7
    }

    Order.getShippingFee(form, function(err, response) {
         //do your error handling and other functions if needed
         //response.data.shipping_fee
         res.send(response);
    })
})

router.post('/change_fee', function(req, res){
    var form = req.body;
    Order.changeFee(form, function(err, response){
        if(err){
            res.status(err.statusCode).send(JSON.parse(err.body));
            return -1;
        }
        res.status(200).send(form);
    });
});

module.exports = router;