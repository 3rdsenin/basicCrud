const router = require('express').Router();


const userRoute = require('./user.route')
const orderRoute = require('./order.route');


router.all('/users', userRoute);
router.all('/orders', orderRoute);



module.exports = router;
