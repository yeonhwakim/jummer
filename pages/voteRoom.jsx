import React from 'react'

import MainTemplate from '../components/templates/main'
import Menu from '../components/blocks/menuVR'
import VrUl from '../components/blocks/vrUl'

const restaurantList = [
  {
    name:'국바ㅏ아아아아아아아아아아아아아아아아아아아아아아아아', 
    star: '3.5', 
    comments: {
      'karen1':'짱맛1',
      'karen2':'그닥2'
    }
  },
  {
    name:'쟁반짜장', 
    star: '4.5', 
    comments: {
      'karen3':'짱맛3',
      'karen4':'그닥4'
    }
  },
  {
    name:'샤브샤브', 
    star: '4.5', 
    comments: {
      'karen5':'짱맛5',
      'karen6':'그닥6'
    }
  },
  {
    name:'라멘', 
    star: '4.5', 
    comments: {
      'karen5':'짱맛5',
      'karen6':'그닥6'
    }
  },
]

export default () => {
  return(
    <MainTemplate icons={ <Menu/> } title={ "roumit lunchTime" }>
      {
        restaurantList.length ? 
          <VrUl data={ restaurantList }/> :
          <></>
      }
    </MainTemplate>
  )
}