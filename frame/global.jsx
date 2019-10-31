import React from 'react'
import styled, { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0; 
    padding: 0;
    font-family: 'Noto Sans KR', sans-serif; 
    outline: none; 
  }

  html {
    width: 100%;
    height:100%;
  }

  body {
    width: 100%;
    height: 100%;
    background-color: rgba(190,190,190,0.92);
  }

  #root{
    width: 100%; 
    height: 100%; 
    display: flex; 
    justify-content: center; 
    align-items: center;
  }

  ul {
    list-style: none;
  }

  .ellipsis{
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    overflow: hidden;
  }

`

const Global = styled.div`
  position: relative;
  width: 360px;
  height: 600px;
  background-color: #ffffff;
` 

export default ({ children }) => {
  return(
    <>
      <GlobalStyle/>
      <Global>
        {children}
      </Global>
    </>
  )
}