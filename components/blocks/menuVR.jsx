import React from 'react'
import { BrowserRouter, HashRouter, Route, Link } from 'react-router-dom' 

import Menu from './menu'
import Icon from '../elements/icons'

export default () => {
  return(
    <Menu>
      <Icon icon={ 'chat' } color={ '#5e5e5e' } size={ '1x' }/>
      <Icon icon={ 'userPlus' } color={ '#5e5e5e' } size={ '1x' }/>
      <Icon icon={ 'listPlus' } color={ '#5e5e5e' } size={ '1x' }/>
      <Link to="/list">
        <Icon icon={ 'home' } color={ '#5e5e5e' } size={ '1x' }/>
      </Link>
      <Icon icon={ 'out' } color={ '#5e5e5e' } size={ '1x' }/>
    </Menu>
  )
}
