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
router.put('/users/:id', function (request, response){
	// const id = req.params //json
	const id = request.params.id
	users.filter(user => {
		if(user.id == id) {
			user.id = id
			user.name = request.body.name
			user.email = request.body.email

			return user
		}
	})
	// res.send(id)
	response.json({
		status: true,
		method: request.method,
		message: 'Data berhasil diubah',
		data: users,
		url: request.url
	})
})

router.delete('/users/:userId', function (request, response) {
	let id = request.params.userId
	users = users.filter(user => user.id != id)
	response.json({
		status: true,
		method: request.method,
		message: 'Data berhasil dihapus',
		data: users,
		url: request.url
	}) //string
})

module.exports = router