const express = require('express')
const router = express.Router()

let users = [
	{id:1 , name:'widi arrohman', email:'widi@gmail.com'},
	{id:2 , name:'wahida hanifah', email:'wahida@gmail.com'},
	{id:3 , name:'wira sanjuni', email:'wira@gmail.com'}

]

//route routing
router.route('/users')
	.get(function(request, response){
		if (users.length > 0) {
			response.json({
				status: true,
				url: request.url,
				method : request.method,
				data: users
			})
		} else {
			response.json({
				status: false,
				message: 'Data tidak ada'
			})
		}
	})
	//dengan lebih dari 1 id dan tanpa const
	// .post('/users/:userId/books/:booksId', function(req,res){
		// response.send(request.params)
	.post(function(request, response){
		// console.log(req.body)
		users.push(request.body)
		response.send({
			status: true,
			method: request.method,
			message: 'Data berhasil disimpan',
			data: users,
			url: request.url
		})
	})

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
	response.send(users) //string
})

module.exports = router