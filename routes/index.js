const router = require('express').Router();

//importing routes
const userRoutes = require('./api')

router.use('/api', userRoutes);

module.exports = router;