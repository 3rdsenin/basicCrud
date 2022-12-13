const router = require('express').Router();
const orderController = require('../controllers/order.controller');


//Get orders
router.get('/', orderController.getOrders);


//Get a specific order
router.get('/:id', orderController.getOrder)

//Create order
router.post('/', orderController.createOrder);


//Update order
router.patch('/:id', orderController.updateOrder);


//Delete order
router.delete('/:id', orderController.deleteOrder);



module.exports = router;