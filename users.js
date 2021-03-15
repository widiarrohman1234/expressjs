const express = require('express')
const router = express.Router()

//route routing
router.route('/users')
	.get(function(req,res){
		res.send('Get User')
	})
	//dengan lebih dari 1 id dan tanpa const
	// .post('/users/:userId/books/:booksId', function(req,res){
		// response.send(request.params)
	.post(function(req,res){
		res.send('post users')
	})

//hanya 1 id dan menggunakan const
router.put('/users/:id', function (req, res){
	const id = req.params //json
	res.send(id)
})

router.delete('/users/:userId', function (req, res) {
	res.send(req.params.userId) //string
})

module.exports = router