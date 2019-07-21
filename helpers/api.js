var request = require('request');

exports.baseRequest = request.defaults({
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjYsImlzcyI6Imh0dHA6Ly9hcGkudW5pZXhwcmVzcy5jYS9vYXV0aC90b2tlbiIsImlhdCI6MTU2MzY2ODc0MiwiZXhwIjoxNTYzNjcyMzQyLCJuYmYiOjE1NjM2Njg3NDIsImp0aSI6ImpaeFNLVTFxQ3BQT0JGY3EifQ.m6VXRHVW-OTPGIMTSJalm6MnfdSEf2ogMj4AJyjDX84'
    },
});
