var request = require('request');

exports.baseRequest = request.defaults({
    headers: {
        'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOjIsImlzcyI6Imh0dHA6Ly9hcGkudW5pZXhwcmVzcy5jYS9vYXV0aC90b2tlbiIsImlhdCI6MTU2MDg4NDUxNywiZXhwIjoxNTYwODg4MTE3LCJuYmYiOjE1NjA4ODQ1MTcsImp0aSI6ImNvT1U5TzVza0thUnFxSVUifQ.pEEAiQ1eFBB92_WU-BM01pgePoGIMd4We2dQUFXGAaw'
    }
});
