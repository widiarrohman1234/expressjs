const { v4: uuidv4} = require('uuid')

//require model user
const User = require('../models/user')

// let users = [
// 	{id:1 , name:'widi arrohman', email:'widi@gmail.com'},
// 	{id:2 , name:'wahida hanifah', email:'wahida@gmail.com'},
// 	{id:3 , name:'wira sanjuni', email:'wira@gmail.com'}
// ]

module.exports ={
	Index:function(request, response){
		// 	if (users.length > 0) {
		// 		response.json({
		// 			status: true,
		// 			url: request.url,
		// 			method : request.method,
		// 			data: users
		// 		})
		// 	} else {
		// 	response.json({
		// 		status: false,
		// 		message: 'Data tidak ada'
		// 	})
		// }
		// User.find({email: 'user2@gmail.com'},function(error, users){ //untuk memilih sesuai email dari parameter ke 1
		// User.findById("60507bb4aa1c9114ac1df49e",function(error, users){ //untuk memilih sesuai id dari parameter ke 1
		// User.find({},"name email",function(error, users){ //digunakan untuk select field tertentu seperti select mysql
		// User.find({name: /user2/i},function(error, users){ //digunakan untuk mencari data seperti query like pada mysql
		let keyword = {}

		if (request.query.keyword) {
			keyword = {name: {$regex: request.query.keyword}}
		}

		User.find(keyword, "name email", function(error, users){ 
			if (error) console.log(error)
			// console.log(users)
		response.render('pages/user/index', {users})
		})
	},Show:function(request, response){
		const id = request.params.iduser

		//sytax untuk mengambil array dari atas
			// const data = users.filter(users => {
			// 	return users.id == id
			// })
		// console.log(id)

		User.findById(id, function(error, data){
			if (error) console.log(error)
				console.log(data)
		response.render('pages/user/show',{user: data})
		})
	},
	Create:function(request,response){
		response.render('pages/user/create')
	},
	Store:function(request, response){
		// console.log(request.body)

			//status data
		// users.push(request.body)
		// response.send({
		// 	status: true,
		// 	method: request.method,
		// 	message: 'Data berhasil disimpan',
		// 	data: users,
		// 	url: request.url
		// })
		// users.push(request.body)

			//untuk data array diatas
		// users.push({
		// 	id: uuidv4(),
		// 	name: request.body.name,
		// 	email: request.body.email
		// })

		// console.log(users)
		// console.log(uuidv4())
		// response.end()
		// response.send(users) //tampilan json

			//store data cara 1
		// const user = new User({
		// 	name: request.body.name,
		// 	email: request.body.email,
		// 	password: request.body.password,
		// })

		// user.save(function (error, data) {
		//   if (error) console.log(error)
		//   	console.log(data)
		// response.redirect('/users') //redirect ke halaman
		// })

			//store data cara 2
		User.create({
			name: request.body.name,
			email: request.body.email,
			password: request.body.password
		}, function (error, data){
			if (error) console.log(error)
		  	console.log(data)
		response.redirect('/users') //redirect ke halaman
		})

	},Edit:function(request, response){
		const id = request.params.id

		User.findById(id, function(error, data){
			if (error) console.log(error)
			response.render('pages/user/edit',{user: data})
		})
	},
	Update:function (request, response){
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
	},

	Delete:function (request, response) {
		let id = request.params.userId
		users = users.filter(user => user.id != id)
		response.json({
			status: true,
			method: request.method,
			message: 'Data berhasil dihapus',
			data: users,
			url: request.url
		}) //string
	}

}
