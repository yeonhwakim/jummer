const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', (socket) => { 
  socket.on('test', data => {
    console.log('data', data)

    io.emit('registered' , 'ㅇㄷㅁㅁㅈㅇㅅㅎ')
  })
  console.log('socket connected')

});

server.listen(3000, () => {
  return console.log('running 3000')
});