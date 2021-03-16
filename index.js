const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//middleware
var myLogger = function(request, response, next){
	// console.log('Logged')
	request.time = new Date()
	next()
}
app.use(myLogger)

//koneksi database MongoDB
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/mongodb', {useNewUrlParser: true, useUnifiedTopology: true})

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log('connection success !!!')
});

// template engine
app.set('view engine', 'ejs')
// static file
// app.use(express.static('public'))
app.use(express.static('public'))

const userRouter = require('./router/users')

///express router
app.use(userRouter)

//1
app.get('/', (request, response) => {
	const kelas = {
		id:1,
		nama:'teknik komputer jaringan',
		date: request.time.toString()
	}
	// console.log('dd express Js')
  	// response.json(kelas)
  	response.render('pages/index', {kelas: kelas})
})

// https://expressjs.com/en/guide/routing.html belajar route

//2
app.get('/about', function(request, response){
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
	// res.send('About')
	response.render('pages/about')

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