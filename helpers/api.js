var request = require('request');

exports.baseRequest = request.defaults({
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjYsImlzcyI6Imh0dHA6Ly9hcGkudW5pZXhwcmVzcy5jYS9vYXV0aC90b2tlbiIsImlhdCI6MTU2NDAxMDU5NCwiZXhwIjoxNTY0MDE0MTk0LCJuYmYiOjE1NjQwMTA1OTQsImp0aSI6ImQ1WXRQcnN3cVpwQnJmUEMifQ.posV35jZiCHh9RMNZQPRkdtYYdjiuOgp7z7sMTp1o6Y'
    },
});
