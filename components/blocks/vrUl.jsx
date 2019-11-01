import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

import Ul from '../elements/ul'
// import VrLi from './vrLi'

const VrUl = styled(Ul)`
  padding: 5px 0;
`

export default ({ data }) => {
  const [open, useOpen] = useState(false)
  const [vote , useVote] = useState([[]])
  const [history , usehistory] = useState([[]])

  useEffect(() => {
    data.map(d => (
      useVote(prevState => [...prevState, [d.count, 0]])
    ))
  },[])
  
  const voting = (s, i) => {
    console.log(s, i)
    const history = usehistory([...vote])


  }
console.log(vote)
  return(
    <VrUl>
      {data.map((restaurant, index) => (
          <VrLi key={restaurant.name}>
           <ListBox>
             <div className="name"  onClick={ () => useOpen(open ? false : true) }>
               <div className="ellipsis">{restaurant.name}</div>
             </div>
             <div className="voteNumber" onClick={ () => voting(vote[index][0],  vote[index][1]) }>{ vote[index][0] }</div>
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