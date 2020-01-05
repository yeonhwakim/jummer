import React, { useEffect } from 'react';
import io from 'socket.io-client';

import {
  useDispatch,
} from 'react-redux';

import {
  addItem,
  getItems,
  voteItem,
  updateItem,
  updatePrevId,
} from '../actions';

const { log: print } = console;

export default () => {
  const dispatch = useDispatch();
  useEffect(() => {
    window.socket = io('http://localhost:5000/voteRoom', {
      transports: ['websocket'],
    });

    const { socket } = window;

    socket.on('connect', () => {
      print('socket connected');
    });

    socket.on('getItems', (data) => {
      dispatch(getItems(data));
    });

    socket.on('addItem', (data) => {
      dispatch(addItem(data.name, data.key));
    });

    socket.on('voteItem', (data) => {
      dispatch(voteItem(data));
    });

    socket.on('updateItem', (data) => {
      dispatch(updateItem(data.currId, data.prevId));
    });

    socket.on('updatePrevId', (data) => {
      if (window.user === data.counter) {
        dispatch(updatePrevId(data.id));
      }
    });
  }, [dispatch]);

  return <></>;
};
