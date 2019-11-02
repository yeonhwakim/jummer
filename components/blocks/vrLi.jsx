import React, { useState } from 'react'
import styled from 'styled-components'

import Star from './star'

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

export default ({ restaurant, voteArr, index }) => {
  const [open, useOpen] = useState(false)
  const [count, useCount] = useState(restaurant.count)
  const [vote , useVote] = useState(voteArr)
  
  return(
    <VrLi>
      <ListBox>
        <div className="name"  onClick={ () => useOpen(open ? false : true) }>
          <div className="ellipsis">{restaurant.name}</div>
        </div>
        <div className="voteNumber" onClick={ () => useCount(prev => prev + 1) }>{ vote[index] }</div>
      </ListBox>
      <DetailBox open = { open }>
        {/* <Star star={ restaurant.star }/> */}
        <div>{restaurant.star}</div>
        <div>{
          Object.keys(restaurant.comments).map( c => (
            <div key={restaurant.comments[c]}>
              <span>{c} : </span><span>{restaurant.comments[c]}</span>
            </div>
          ))
        }</div>
      </DetailBox>
    </VrLi>
  )
}