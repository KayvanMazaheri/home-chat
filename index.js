'user strict'

const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)

io.on('connection', function(socket){
	socket.on('message', function(message){
		socket.emit('message', message)
	})
})

app.get('/', function(req, res){
	res.sendFile(__dirname + '/chat.html')
});

http.listen(8080, function(err){
	if(!err){
		console.log('server is up and running.')
	}
})
