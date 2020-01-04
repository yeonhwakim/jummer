import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

import Global from './global';
import Socket from './socket';
import VoteRoom from '../pages/voteRoom';
import RoomList from '../pages/roomList';

const Index = () => (
  <BrowserRouter>
    <Global>
      <Socket />
      <Route exact path="/voteRoom" component={VoteRoom} />
      <Route path="/list" component={RoomList} />
    </Global>
  </BrowserRouter>

);

ReactDom.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root'),
);
