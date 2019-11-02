import React, { useState, useRef } from 'react'

import MainTemplate from '../components/templates/main'
import Menu from '../components/blocks/menuVR'
import VrUl from '../components/blocks/vrUl'

const restaurantList = [
  
]

export default () => {
  const [display, setDisplay] = useState('none')
  const [foods, setFoods] = useState([])
  const input = useRef('')

  const addList = e => {
    setDisplay('block')
  }

  const add = e => {
    setFoods([...foods, input.current.value])
  }

  return(
    <MainTemplate icons={ <Menu/> } title={ "roumit lunchTime" }>
      <button className="addListBtn" onClick={addList}>추가</button>
      <div style={{display}}>
        <input className="addInput" ref={input}/>
        <button className="addBtn" onClick={add}>추가</button>
      </div>
      <ul>
        {
          foods.map(food => <li key={food}>{food}</li>)
        }
      </ul>
      {/* {
        restaurantList.length ? 
          <VrUl data={ restaurantList }/> :
          <></>
      } */}
    </MainTemplate>
  )
}