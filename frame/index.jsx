import React from 'react'
import ReactDom from 'react-dom'
import { BrowserRouter,  Route } from 'react-router-dom' 

import Global from './global'
import VoteRoom from '../pages/voteRoom'
import RoomList from '../pages/roomList'

const Index = () => {
  return(
    <BrowserRouter>
      <Global>
        <Route path="/" component={ VoteRoom }/>
        <Route path="/list" component={ RoomList }/>
      </Global>
    </BrowserRouter>

  )
}

ReactDom.render(<Index/>, document.getElementById('root'))