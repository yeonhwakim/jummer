import React from "react"
import styled from "styled-components"



// icon import
import { Forum } from 'styled-icons/material'
import { GroupAdd } from 'styled-icons/material'
import { PlaylistAdd } from 'styled-icons/material'
import { Home } from 'styled-icons/material'
import { CallMissedOutgoing } from 'styled-icons/material'
import { Close } from 'styled-icons/material'
import { DragHandle } from 'styled-icons/material'
import { Star } from 'styled-icons/material'
import { StarBorder } from 'styled-icons/material'

// add imported icons
const icons = {
  chat: <Forum/>,
  userPlus: <GroupAdd/>,
  listPlus: <PlaylistAdd/>,
  home: <Home/>,
  out: <CallMissedOutgoing/>,
  close: <Close/>,
  moveBar: <DragHandle/>,
  star: <StarBorder/>,
  fullStar: <Star/>,
}

const Icons = styled.i`
  display: inline-block;
  padding: 5px;
  cursor: pointer;

  svg {
    width: ${props => props.size};
    height: ${props => props.size};
    color: ${props => props.color};
  } 
`

export default ({ icon, size, color }) =>( 
  <>
    <Icons  icon={ icon } size={ size } color = { color }>
      {icons[icon]}
    </Icons>
  </>
)