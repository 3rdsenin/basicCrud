const router = require('express').Router();


const userRoute = require('./user.route')
const orderRoute = require('./order.route');
const authRoute = require('./auth.route');

router.use('/users', userRoute);
router.use('/orders', orderRoute);
router.use('/auth', authRoute);



module.exports = router;