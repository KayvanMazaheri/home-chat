'user strict'

const app = require('express')()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const nconf = require('nconf')

nconf.env()
nconf.argv()
nconf.defaults({
	'PORT' : 8080,
})

io.on('connection', function(socket){
	console.log('client connected')
	socket.on('message', function(message){
		socket.broadcast.emit('message', message)
	})
})

app.get('/', function(req, res){
	res.sendFile(__dirname + '/chat.html')
});

http.listen(nconf.get('PORT'), function(err){
	if(err){
		console.log(err)
	} else {
		require('dns').lookup(require('os').hostname(), function (err, add, fam) {
			console.log('server is up and running on ' + add + ':' + nconf.get('PORT'))
		})
	}
})
