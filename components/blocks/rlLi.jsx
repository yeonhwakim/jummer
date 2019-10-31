import React, { useState } from 'react'
import styled from 'styled-components'

import Icon from '../elements/icons'

const RlLi = styled.li`
  padding: 10px 20px;
  border-bottom: 1px solid #7f7f7f;

  :first-child{
    border-top: 1px solid #7f7f7f;
  }
  > div {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .name {
    font-weight: bold;
    font-size: 20px;
    color: #5e5e5e;
    width: 260px;
    line-height: 1.5;
  }

  .time {
    font-size: 15px;
    color: #5e5e5e;
    line-height: 1.5;
  }
`


export default ({ room }) => {
  return(
    <RlLi>
      <div>
        <div>
          <p className="name ellipsis">{room.name}</p>
          <p className="time">{room.lunchTime}</p>
        </div>
        <Icon icon={ 'moveBar' } size={'lg'} color={'#5e5e5e'}/>
      </div>
      <div>
        <div>

        </div>
        <div>

        </div>
      </div>
    </RlLi>
  )
}