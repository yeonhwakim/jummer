import React from 'react';

import MainTemplate from '../components/templates/main';
import Menu from '../components/blocks/menuRL';
import RlUl from '../components/blocks/rlUl';

const roomList = [
  { name: 'roumitaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', lunchTime: '11:30' },
  { name: 'dalab', lunchTime: '11:30' },
  { name: 'kuca', lunchTime: '11:30' },
  { name: '또로로로로로롱', lunchTime: '11:30' },
];

export default () => (
  <MainTemplate icons={<Menu />} title="Room List">
    {
        roomList.length
          ? <RlUl data={roomList} />
          : <></>
      }
  </MainTemplate>
);
