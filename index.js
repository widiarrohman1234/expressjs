const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

const userRouter = require('./router/users')

///express router
app.use(userRouter)

//1
app.get('/', (req, res) => {
	const kelas = {
		id:1,
		kelas:'teknik komputer jaringan'
	}
	// console.log('dd express Js')
  res.send(kelas)
})

// https://expressjs.com/en/guide/routing.html belajar route

//2
app.get('/about', function(req, res){
	// res.send('<h3>some html</h3>')
	// res.status(404).send('Sorry, we cannot find that!')
	// res.status(500).send({ error: 'something blew up' })
	// res.status(500).send('something blew up')
		//redirect
	// res.redirect('/home')
		// sendStatus https://expressjs.com/en/4x/api.html#res.sendStatus
	// res.sendStatus(200) //ok
	// res.sendStatus(403) //forbidden
	// res.sendStatus(404)//not found
	// res.sendStatus(500)//internal server error
	// res.sendStatus(9999 )//internal server error
	res.send('About')

})

//3
app.get('/home', function(request, response){
	response.send('Home')
})


//running port
//cara 1
app.listen(port, () => {
  console.log(`Server okay, silahkah cek http://localhost:${port}`)
})

//cara 2
// app.listen(3000, function(){
// 	console.log('sever berjalan')
// })