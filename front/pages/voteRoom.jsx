import React, {
  useRef,
  useEffect,
} from 'react';

import {
  useDispatch,
  useSelector,
} from 'react-redux';

import {
  setItem,
  joinRoom,
  reqAddItem,
  reqVoteItem,
} from '../actions';

import { generateKey, generateId } from '../js/tools';

import MainTemplate from '../components/templates/main';
import VoteRoomMenu from '../components/blocks/menuVR';
import { AddItemForm } from '../components/blocks/addItemFrom';
import { Items, Item, ItemInfo } from '../components/blocks/voteRoomItems';
import { NotiAddItem } from '../components/blocks/notiAddItem';

export default () => {
  const { value, items, prevId } = useSelector((state) => ({
    value: state.value,
    items: state.items,
    prevId: state.prevId,
  }));

  const dispatch = useDispatch();
  const input = useRef('');

  useEffect(() => {
    input.current.focus();
  }, []);


  useEffect(() => {
    window.user = generateId();
  }, []);

  useEffect(() => {
    dispatch(joinRoom());
  }, [dispatch]);

  const setItems = (e) => dispatch(setItem(e.target.value));

  const addItems = (e) => {
    e.preventDefault();
    if (!input.current.value) {
      alert('식당이름을 입력해주세요.');
      return;
    }

    dispatch(reqAddItem(input.current.value, generateKey()));
  };

  const voteItems = (id) => dispatch(reqVoteItem(id, prevId));

  return (
    <MainTemplate icons={<VoteRoomMenu />} title="roumit lunchTime">
      <AddItemForm onSubmit={addItems}>
        <div>
          <input className="addInput" ref={input} value={value} onChange={setItems} />
          <button className="addBtn" type="submit">ADD</button>
        </div>
      </AddItemForm>
      {
        !items.length
          ? <NotiAddItem>점심 메뉴를 추가해주세요.</NotiAddItem>
          : (
            <Items>
              {
                items.map((item) => (
                  <Item key={item.key}>
                    <ItemInfo>
                      <div className="name">
                        <div className="ellipsis">{item.name}</div>
                      </div>
                      <button type="button" className="counter" onClick={() => voteItems(item.id || item.key)}>{item.count || 0}</button>
                    </ItemInfo>
                  </Item>
                ))
              }
            </Items>
          )
      }
    </MainTemplate>
  );
};
