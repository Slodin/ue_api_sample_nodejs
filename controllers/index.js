const express = require('express')
  , router = express.Router()

//Identify our controllers to route
router.use('/api/v1/users', require('./users'))
router.use('/api/v1/orders', require('./orders'))
router.use('/api/v1/sms', require('./sms'));

router.get('/', (req, res) => {
  res.render('index')
})

module.exports = router