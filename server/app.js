const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const voteRoom = io.of('/voteRoom');
const { Pool } = require('pg')

const pool = new Pool({
  user: 'yeonhwa',
  host: 'jummer.cupxpirjrt9s.ap-northeast-2.rds.amazonaws.com',
  database: 'jummer',
  password: 'qet135!#%',
  port: 5432,
});

const { log: print } = console;

voteRoom.on('connection', (socket) => {
  socket.on('join', (data) => {
    socket.join(data.room, () =>{
      pool.query(query, [data.room, data.room], (err, result) => {
        if (err) print(err)
        voteRoom.emit('getItems', result.rows)
      })
    });
  });

  socket.on('reqAddItem', (data) => {
    voteRoom.to(data.room).emit('addItem', data);
    pool.query('INSERT INTO voteroom(name, room, id, key) VALUES ($1, $2, $3, $4)',
      [data.name, data.room, data.id, data.key],(err)=>{
        if (err) print(err)
      }
    );
  })

  socket.on('reqVoteItem', (data) => {
    voteRoom.to(data.room).emit('updatePrevId', data);
    vote(data)
  })    
});

const vote = async data => {
  const checkDuplicate = await selectItem(data)
  if (checkDuplicate) {
    if(data.prevId &&  data.id === data.prevId){
      await deleteItem(data, false)
    }
    if(data.prevId &&  data.id !== data.prevId){
      await deleteItem(data, true)
      await insertItem(data)
    }
  } else {
    await insertItem(data)
  }
  
  const items = await selectAll(data)
  
  return voteRoom.to(data.room).emit('voteItem', items)
}

const query = 'WITH o AS (' +
'	SELECT id, COALESCE(COUNT(*), 0) AS count'+
'	FROM once'+
'	WHERE  room = $1'+
'	GROUP BY id'+
') '+
'SELECT * FROM voteroom v LEFT JOIN o ON o.id = v.id 	WHERE  v.room = $2 ORDER BY v.add_time DESC'

const selectAll = (data) => pool.query(query, [data.room, data.room])
  .then(res => res.rows)
  .catch(err => console.log('err1', err))

const selectItem = (data) => pool.query('SELECT * FROM once WHERE room = $1 AND counter = $2', [data.room, data.counter])
  .then(res => res.rows.length)
  .catch(err => console.log('err2',err))

  const deleteItem = (data, prevId) => pool.query('DELETE FROM once WHERE room = $1 AND id = $2 AND counter = $3', [data.room, prevId ? data.prevId : data.id, data.counter])
  .then(() => true)
  .catch(err => console.log('err4',err))

const insertItem = (data) => pool.query('INSERT INTO once(room, id, counter) VALUES ($1, $2, $3)', [data.room, data.id, data.counter])
  .then(() => true)
  .catch(err => console.log('err5',err))

server.listen(5000, () => print('running 5000'));
