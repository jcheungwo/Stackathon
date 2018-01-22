const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
router.use('', require('./orders'))
router.use('/currency', require('./currency'))

router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
