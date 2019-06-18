# Uni Express API Sample - Node.js

Sample code for Uni Express platform API to demonstrate how the API can be consumed using Node.js. 
This example uses **ES5** syntax with **express** and **request**.

If  you  are  using  any other  http  request  packages  like  **http**, **https**, **ajax**, or  **axios**. Please  refer  to  their  package  page for additional  information  on  how  to  pass  query  strings.

### Example OAuth 2.0 request code

Using  GET  method  to  request  auth (**Will be changed to POST soon**) client data structure:

    client  = {
	    grant_type:  'client_credentials',
	    client_id:  '100002',
	    client_secret:  'nmTXcJNnc0r8MTWFYEJ8gKROGxuB2YiN'
	}

Pass  client  data  into  query  string, you can check status of this call via **response.statusCode** whether or not returned 200. If successful, do all your business logic you want or just return the information using callback, promises, or async/await. (Not all methods in the example have error handling)

    exports.authenticate  =  function(client, cb){
		request.get({
			url:  'http://api.uniexpress.ca/oauth/token',
			qs:  client
		}, function(error, response, body) {
			if(cb){
				if(response  &&  response.statusCode  !==  200)
					error  =  response;
				cb(error, JSON.parse(body));
			}
		});
	}

> To call this Authenticate method, we first import it:

    const  User  =  require('../models/user');

Then in your router or any other means, you can call **User.authenticate(client, callback)** and use the returned response object from above and get the bearer token by using **response.data.access_token**. You can then store this token in cookie or any other session management packages, this is required to pass into our **header** when we are doing http requests. Without this token, we would be getting 403 error stating **invalid_access_token**.

    User.authenticate(client, function(err, response){
	    if(err){
		    res.status(err.statusCode).send(JSON.parse(err.body));
		    return  -1;
	    }
	    res.send(response);
    });

### Setting auth header
In this example, we will use a basic header to authorize our access to the API. There are serval ways to achieve this, this is only for a simple demonstration to set a global header for request. In reality this is not ideal, using cookies or web storage is much better approach.

    request.defaults({
	    headers: {
		    'Authorization':  'Bearer <Insert token here>'
	    },
    });

However, this will set our calls to all contain the Bearer token, thus allowing us access.

### Fixing server returning 500 from POST /orders 
In the making of this example, I have noticed POST method for /orders is returning 500. After reading the error message, it is missing a required variable named **"shipping_fee"**, this is usually calculated from calling **GET /orders/shipping_fee**. Just adding this field will enable the ability to create a new order. 

> **NOTE: start_consign will return as all null, but it's not a required field, thus still able to make order with no issues**

    var  form  = {
	    order_type:  2,
	    start_consign : {
		    //start_consign will return as all null, but it's not a required field, thus still able to make order with no issues
		    consignee_name:  '发件TEST',
		    address:  '出发地址',
		    mobile:  '1234567',
		    sign_building:  '著名景点',
		    buzz_code:  '123456',
		    lng:  -123.2231,
		    lat:  34.01234
	    },
	    consignee: {
		    consignee_name:  '收件TEST',
		    address:  '收件人地址',
		    mobile:  '12345678',
		    sign_building:  '非著名景点',
		    buzz_code:  '123456',
		    lng:  -123.2231,
		    lat:  34.01234
	    },
	    add_time:  '2018-01-01 10:00:00',
	    is_subscribe:  0,
	    receive_time_label:  '9:30PM - 10:00PM',
	    postscript:  '不要辣, 不要辣',
	    pay_name:  'Credit Card Payment',
	    payment_method:  7,
	    goods_amount:  0.05,
	    distance:  6,
	    tax:  0.01,
	    fee:  0,
	    fee_per:  0,
	    insure_fee:  0,
	    order_amount:  0.02,
	    shop_lng:  -123.222,
	    shop_lat:  32.222,
	    partner_shop_name:  '良品铺子',
	    line_items: [
	    {
	    goods_name:  '商品名称',
	    goods_number:  1,
	    goods_price:  2.00,
	    goods_attr:  '白色, 大号'
	    }
	    ],
	    pay_status:  2,
	    shop_accept:  0,
	    shipping_fee:  0.5
    }
