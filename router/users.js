const express = require('express')
const router = express.Router()

let users = [
	{id:1 , name:'widi arrohman', email:'widi@gmail.com'},
	{id:2 , name:'wahida hanifah', email:'wahida@gmail.com'},
	{id:3 , name:'wira sanjuni', email:'wira@gmail.com'}

]

//route routing
router.route('/users')
	.get(function(req,res){
		res.json(users)
	})
	//dengan lebih dari 1 id dan tanpa const
	// .post('/users/:userId/books/:booksId', function(req,res){
		// response.send(request.params)
	.post(function(req, res){
		// console.log(req.body)
		users.push(req.body)
		res.json(users)
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
	response.json(users)
})

router.delete('/users/:userId', function (req, res) {
	res.send(req.params.userId) //string
})

module.exports = router