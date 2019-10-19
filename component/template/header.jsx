import React from 'react'

import Icons from '../../component/atoms/icons'

export default () => {
  return(
    <>
      <div className="header">
        <div className="logo">
          <h1>JUMMER</h1>
        </div>
        <div className="menu">
          <Icons icon="chat"/>
          <Icons icon="userPlus"/>
          <Icons icon="listPlus"/>
          <Icons icon="home"/>
          <Icons icon="out"/>
        </div>
      </div>
      <style jsx global>{`
        .header {
          display: flex;
          justify-content: space-between; 
          align-items: center;
          padding: 20px;
          background-color: #f1c40f;
        }

        .header > div {
          vertical-align: middle;
        }

        .logo h1{
          font-size: 25px;
          font-weight: bold;
          color: #5e5e5e;
        }

        .menu > svg {
          display: inline-block;
          font-size: 20px;
          color: #5e5e5e;
        }

        .menu > svg:not(:last-child) {
          margin-right: 15px;
        }
      `}</style>
    </>
  )
}