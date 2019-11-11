const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

const { createVoteRoom } = require('./voteRoom');

const { log: print } = console;

const voteRoom = createVoteRoom();

io.on('connection', (socket) => {
  const items = voteRoom.getItems();
  socket.emit('items', items);
});

server.listen(3000, () => print('running 3000'));
