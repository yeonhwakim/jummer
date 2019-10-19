import React from "react"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

// icon import
import { faComments } from "@fortawesome/free-solid-svg-icons"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { faFileMedical } from "@fortawesome/free-solid-svg-icons"
import { faHome } from "@fortawesome/free-solid-svg-icons"
import { faArrowRight } from "@fortawesome/free-solid-svg-icons"


// add imported icons
const icons = {
  chat: faComments,
  userPlus: faUserPlus,
  listPlus: faPlus,
  home: faHome,
  out: faArrowRight
}


export default props => <FontAwesomeIcon icon={icons[props.icon]} />;