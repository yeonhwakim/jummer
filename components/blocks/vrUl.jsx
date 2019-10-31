import React from 'react'
import styled from 'styled-components'

import Ul from '../elements/ul'
import VrLi from './vrLi'

const VrUl = styled(Ul)`
  padding: 5px 0;
`

export default ({ data }) => {
  return(
    <VrUl>
      {data.map(d => (
        <VrLi key={d.name} restaurant={d}/>
      ))}
    </VrUl>
  )
}