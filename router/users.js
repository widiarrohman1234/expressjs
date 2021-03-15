const express = require('express')
const router = express.Router()

const UserController = require('../controllers/UserController')

//route routing
router.route('/users')
	.get(UserController.Index)
	//dengan lebih dari 1 id dan tanpa const
	// .post('/users/:userId/books/:booksId', function(req,res){
		// response.send(request.params)
	.post(UserController.Store)

//hanya 1 id dan menggunakan const
router.put('/users/:id', UserController.Update)

router.delete('/users/:userId', UserController.Delete)

module.exports = router