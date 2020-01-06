const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const { Pool } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const voteRoom = io.of('/voteRoom');

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
  port: process.env.DB_PORT,
});

const { log: print } = console;

const query = 'WITH o AS ('
+ '	SELECT id, COALESCE(COUNT(*), 0) AS count'
+ '	FROM once'
+ '	WHERE  room = $1'
+ '	GROUP BY id'
+ ') '
+ 'SELECT * FROM voteroom v LEFT JOIN o ON o.id = v.id 	WHERE  v.room = $2 ORDER BY v.add_time DESC';

const selectAll = (data) => pool.query(query, [data.room, data.room])
  .then((res) => res.rows)
  .catch((err) => print('err1', err));

const selectItem = (data) => pool.query('SELECT * FROM once WHERE room = $1 AND counter = $2', [data.room, data.counter])
  .then((res) => res.rows.length)
  .catch((err) => print('err2', err));

const deleteItem = (data, prevId) => pool.query('DELETE FROM once WHERE room = $1 AND id = $2 AND counter = $3', [data.room, prevId ? data.prevId : data.id, data.counter])
  .then(() => true)
  .catch((err) => print('err4', err));

const insertItem = (data) => pool.query('INSERT INTO once(room, id, counter) VALUES ($1, $2, $3)', [data.room, data.id, data.counter])
  .then(() => true)
  .catch((err) => print('err5', err));

const vote = async (data) => {
    const item = await selectItem(data);
    if (item) {
      await deleteItem(data, data.id !== data.prevId);
    }
  
    if (!item || data.id !== data.prevId) {
      await insertItem(data);
    }
  
    const items = await selectAll(data);
  
    voteRoom.to(data.room).emit('voteItem', items);
};

voteRoom.on('connection', (socket) => {
  socket.on('join', (data) => {
    socket.join(data.room, () => {
      pool.query(query, [data.room, data.room], (err, result) => {
        if (err) {
          print(err);
        }
        voteRoom.emit('getItems', result.rows);
      });
    });
  });

  socket.on('reqAddItem', (data) => {
    voteRoom.to(data.room).emit('addItem', data);
    pool.query('INSERT INTO voteroom(name, room, id, key) VALUES ($1, $2, $3, $4)',
      [data.name, data.room, data.id, data.key], (err) => {
        if (err) {
          print(err);
        }
      });
  });

  socket.on('reqVoteItem', (data) => {
    voteRoom.to(data.room).emit('updatePrevId', data);
    vote(data);
  });
});


server.listen(process.env.PORT, () => print('running 5000'));
