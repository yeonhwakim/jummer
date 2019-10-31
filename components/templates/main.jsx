import React from 'react'

import Header from '../blocks/header'
import Content from '../blocks/content'


export default ({ icons, title,  children }) => {
  return(
    <>
      <Header icons={ icons }/>
      <Content title={ title }>
        { children }
      </Content>
    </>
  )
}