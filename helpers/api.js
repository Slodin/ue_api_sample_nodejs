var request = require('request');

exports.baseRequest = request.defaults({
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjYsImlzcyI6Imh0dHA6Ly9hcGkudW5pZXhwcmVzcy5jYS9vYXV0aC90b2tlbiIsImlhdCI6MTU2MzM5MzQyMCwiZXhwIjoxNTYzMzk3MDIwLCJuYmYiOjE1NjMzOTM0MjAsImp0aSI6ImNXNmZ4ZzY4VXVCb0VXRjQifQ.Y3KgbfoDQqfwDHNbZsduBeCinst2PkNIMVIrGF36DxU'
    },
});
