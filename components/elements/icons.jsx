import React from "react"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// icon import
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faFileMedical } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"
import { faTimes } from "@fortawesome/free-solid-svg-icons"
import { faBars } from "@fortawesome/free-solid-svg-icons"


// add imported icons
const icons = {
  chat: faComments,
  userPlus: faUserPlus,
  listPlus: faPlus,
  home: faHome,
  out: faArrowRight,
  close: faTimes,
  moveBar: faBars
}

const Icon = styled.i`
  display: inline-block;
  padding: 5px;
  cursor: pointer;
`;

export default ({ icon, size, color }) =>( 
  <>
    <Icon><FontAwesomeIcon icon={icons[icon]} size={size} color={color} /></Icon> 
  </>
)