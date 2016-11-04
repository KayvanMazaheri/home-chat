'user strict'

const app = require('express')()
const io = require('socket.io')(app)

io.on('connection', function(socket){
	socket.on('message', function(message){
		socket.emit('message', message)
	})
})

app.get('/', function(req, res){
	
})

app.listen(8080, function(err){
	if(!err){
		console.log('server is up and running.')
	}
})
