let users = [
	{id:1 , name:'widi arrohman', email:'widi@gmail.com'},
	{id:2 , name:'wahida hanifah', email:'wahida@gmail.com'},
	{id:3 , name:'wira sanjuni', email:'wira@gmail.com'}
]

module.exports ={
	Index:function(request, response){
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
	},
	
	Store:function(request, response){
		// console.log(req.body)
		users.push(request.body)
		response.send({
			status: true,
			method: request.method,
			message: 'Data berhasil disimpan',
			data: users,
			url: request.url
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
