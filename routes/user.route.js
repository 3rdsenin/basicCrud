const router = require('express').Router();
const userController = require('../controllers/user.controller');


//Get orders
router.get('/', userController.getUser)


//Create order
router.post('/', userController.createUser);


//Update order
router.patch('/:id', userController.updateUser);


//Delete order
router.delete('/:id', userController.deleteUser);



module.exports = router;