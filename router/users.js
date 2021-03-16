const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

//route routing
router.route('/users')
	.get(UserController.Index)
	.post(UserController.Store)
router.get('/users/create',UserController.Create)
router.get('/users/:iduser',UserController.Show)
router.put('/users/:id', UserController.Update)
router.delete('/users/:userId', UserController.Delete)

module.exports = router