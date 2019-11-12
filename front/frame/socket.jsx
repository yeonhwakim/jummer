import React, { useEffect } from 'react';
import io from 'socket.io-client';

const { log: print } = console;

export default () => {
  useEffect(() => {
    window.socket = io('http://localhost:3000', {
      transports: ['websocket'],
    });
    const { socket } = window;
    print('socket connect');
    socket.on('connect', () => {
      socket.emit('test', 'karen');
      print('socket connected');
      socket.emit('test');
    });
  }, []);

  return <></>;
};
