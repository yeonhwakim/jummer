const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const { log: print } = console;

io.on('connection', (socket) => {
  socket.on('test', (data) => {
    print('data', data);

    io.emit('registered', 'ㅇㄷㅁㅁㅈㅇㅅㅎ');
  });
  print('socket connected');
});

server.listen(3000, () => print('running 3000'));
