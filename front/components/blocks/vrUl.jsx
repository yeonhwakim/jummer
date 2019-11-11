import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Ul from '../elements/ul'
import VrLi from './vrLi'

const VrUl = styled(Ul)`
  padding: 5px 0;
`

export default ({ data }) => {
  const [vote , useVote] = useState([])

  useEffect(() => {
    data.map(d => (
      useVote(prevState => [...prevState, d.count])
    ))
  },[])

  return(
    <VrUl>
      {data.map((restaurant, index) => (
          <VrLi key={restaurant.name} restaurant={restaurant} voteArr={vote} index={index}/>
      ))}
    </VrUl>
  )
}



const VrLi = styled.li`
  padding: 5px 20px;

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

const ListBox = styled.div`
  display:flex;
  justify-content: space-between;
`

const DetailBox = styled.div`
  display: ${props => props.open ? 'block' : 'none'};
  border-radius: 5px;
  background-color: rgba(224, 224, 224, 0.53);
  margin-top: 10px;
  padding: 10px 15px;
`