import React from 'react'
import ReactDOM from 'react-dom'

import { isMobile } from 'react-device-detect'


import Global from './10_global'
import Main from './20_main'
import Popup from './30_popup'
import Chat from './40_chat'
import Alert from './50_alert'

const Index = () => {
  return(
    <Global>
      <Main/>
      <Popup/>
      <Chat/>
      <Alert/>
    </Global>
  )
}

ReactDOM.render(<Index />, document.getElementById('root')) 