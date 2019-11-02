import React, { useState, useRef, useCallback, useReducer, useEffect } from 'react'
import styled from 'styled-components'

import MainTemplate from '../components/templates/main'
import Menu from '../components/blocks/menuVR'
import Ul from '../components/elements/ul'

const VrUl = styled(Ul)`
  padding: 5px 0;
`
const Noti = styled.div`
  margin: auto;
  margin-top: 10px;
  width: calc(100% - 40px);
  text-align: center;
  font-weight: bold;
  font-size: 16px;
  color: #5e5e5e;
`

const VrLi = styled.li`
  padding: 5px 20px;
`
const ListBox = styled.div`
  display:flex;
  justify-content: space-between;

  .name {
    padding: 15px 15px;
    width: calc(100% - 30px - 45px - 15px);
    border-radius: 5px;
    background-color: #e0e0e0;
    font-weight: bold;
    font-size: 16px;
    color: #5e5e5e;
    cursor: pointer;
  }

  .name > div {
    width: 198px;
  }

  .voteNumber{
    padding: 15px 10px;
    width: 30px;
    border-radius: 5px;
    background-color: #9e9e9e;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
  }
`
const AddForm = styled.form`
  div {
    position: relative;
    margin: auto;
    width: calc(100% - 40px);
    height: 45px;
    border: solid 2px #f1c40f; 
    border-radius: 5px;
    background-color: #ffffff;
    box-sizing: border-box;
  }

  input {
    position: absolute;
    left: 1px;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    width: 255px; 
    height: 40px;
    font-size: 15px; 
    font-weight: 400;
    color: #303030;
    padding: 0 15px;
  }

  button {
    position: absolute;
    right: 0;
    width: 60px;
    height: 100%;
    border :none;
    background-color: #f1c40f;
    font-weight: bold; 
    font-size: 16px; 
    color: #5e5e5e;
    cursor: pointer;
  }
`

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
    if(!input.current.value) return alert('값을 입력해주세요.')
    dispatch({type: 'add_food', data: {name: input.current.value, voteNumber: 0}})
    input.current.focus()
  }

  const vote = (index) => {
    let update = [...state.foods]
    update[index].voteNumber = update[index].voteNumber + 1
    dispatch({type: 'vote_food', update})
  }

  return(
    <MainTemplate icons={ <Menu/> } title={ "roumit lunchTime" }>
      <AddForm onSubmit={ addFood }>
        <div>
          <input className="addInput" ref={ input } value={ state.value } onChange={ inputFood }/>
          <button type="submit" className="addBtn">ADD</button>
        </div>
      </AddForm>
      {
        !state.foods.length ? 
          <Noti>점심 메뉴를 추가해주세요.</Noti> :
          <VrUl>
            {
              state.foods.map((food, index) => (
                <VrLi key={food + index}>
                  <ListBox>
                    <div className="name">
                      <div className="ellipsis">{food.name}</div>
                    </div>
                    <div className="voteNumber" onClick={ () => vote(index) }>{food.voteNumber}</div>
                  </ListBox>
                </VrLi>
              ))
            }
          </VrUl>
      }
    </MainTemplate>
  )
}