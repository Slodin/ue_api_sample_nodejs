var request = require('request');

exports.baseRequest = request.defaults({
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9hcGkudW5pZXhwcmVzcy5jYS9vYXV0aC90b2tlbiIsImlhdCI6MTU2MDk3MTgyNywiZXhwIjoxNTYwOTc1NDI3LCJuYmYiOjE1NjA5NzE4MjcsImp0aSI6IjZCN2VNSUU0bEF6QjVGeXAifQ.XTDsVsI689HbzlM8TCTG-6pci4DBMzdXKGe3Nd4-MuA'
    },
});
