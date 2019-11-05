import React, { useState, useRef, useCallback, useReducer, useEffect } from 'react'
import styled from 'styled-components'

import MainTemplate from '../components/templates/main'
import VoteRoomMenu from '../components/blocks/menuVR'
import { AddItemForm } from '../components/blocks/addItemFrom'
import { Items, Item, ItemInfo } from '../components/blocks/voteRoomItems'
import { NotiAddItem } from '../components/blocks/notiAddItem'


const initialState = {
  value: '',
  foods: []
};

function reducer(state, action) {
  switch (action.type) {
    case 'input_food' :
      return {...state, value: action.value};
    case 'add_food':
      return {...state, foods: [...state.foods, action.data], value: ''};
    case 'vote_food':
        return {...state, foods: action.update};
    default:
      throw new Error();
  }
}

export default () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const input = useRef('')

  useEffect(()=>{
    input.current.focus()
  },[])

  const inputFood = useCallback(e => {
    dispatch({type: 'input_food', value: e.target.value})
  },[])

  const addFood = e => {
    e.preventDefault()
    if(!input.current.value) {
      alert('값을 입력해주세요.')
      return
    }
    dispatch({type: 'add_food', data: {name: input.current.value, voteNumber: 0}})
    input.current.focus()
  }

  const vote = (index) => {
    let update = [...state.foods]
    update[index].voteNumber = update[index].voteNumber + 1
    dispatch({type: 'vote_food', update})
  }

  return(
    <MainTemplate icons={ <VoteRoomMenu/> } title={ "roumit lunchTime" }>
      <AddItemForm onSubmit={ addFood }>
        <div>
          <input className="addInput" ref={ input } value={ state.value } onChange={ inputFood }/>
          <button type="submit" className="addBtn">ADD</button>
        </div>
      </AddItemForm>
      {
        !state.foods.length ? 
          <NotiAddItem>점심 메뉴를 추가해주세요.</NotiAddItem> :
          <Items>
            {
              state.foods.map((food, index) => (
                <Item key={food + index}>
                  <ItemInfo>
                    <div className="name">
                      <div className="ellipsis">{food.name}</div>
                    </div>
                    <button className="voteNumber" onClick={ () => vote(index) }>{food.voteNumber}</button>
                  </ItemInfo>
                </Item>
              ))
            }
          </Items>
      }
    </MainTemplate>
  )
}