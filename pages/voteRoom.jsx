import React, { useState, useRef, useCallback, useReducer, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setItem, addItem, voteItem } from '../actions'


import MainTemplate from '../components/templates/main'
import VoteRoomMenu from '../components/blocks/menuVR'
import { AddItemForm } from '../components/blocks/addItemFrom'
import { Items, Item, ItemInfo } from '../components/blocks/voteRoomItems'
import { NotiAddItem } from '../components/blocks/notiAddItem'

export default () => {
  const { value, items } = useSelector((state) => ({
    value: state.value,
    items: state.items
  }));

  const dispatch = useDispatch()
  const input = useRef('')

  useEffect(()=>{
    input.current.focus()
  },[])

  const setItems = e => dispatch(setItem(e.target.value)) 
  const addItems = e => {
    e.preventDefault()
    if(!input.current.value) {
      alert('식당이름을 입력해주세요.')
      return
    }
    dispatch(addItem(input.current.value)) 
  }
  const voteItems = index => dispatch(voteItem(index)) 

  return(
    <MainTemplate icons={ <VoteRoomMenu/> } title={ "roumit lunchTime" }>
      <AddItemForm onSubmit={ addItems }>
        <div>
          <input className="addInput" ref={ input } value={ value } onChange={ setItems }/>
          <button type="submit" className="addBtn">ADD</button>
        </div>
      </AddItemForm>
      {
        !items.length ? 
          <NotiAddItem>점심 메뉴를 추가해주세요.</NotiAddItem> :
          <Items>
            {
              items.map((item, index) => (
                <Item key={item + index}>
                  <ItemInfo>
                    <div className="name">
                      <div className="ellipsis">{item.name}</div>
                    </div>
                    <button className="counter" onClick={ () => voteItems(index) }>{item.counter}</button>
                  </ItemInfo>
                </Item>
              ))
            }
          </Items>
      }
    </MainTemplate>
  )
}