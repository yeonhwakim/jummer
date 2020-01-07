const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const dotenv = require('dotenv');
dotenv.config();

const { log: print } = console;

require('./socket')(io)

server.listen(process.env.PORT, () => print('running 5000'));
