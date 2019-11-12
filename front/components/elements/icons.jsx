import React from 'react';
import styled from 'styled-components';


// icon import
import {
  Forum,
  GroupAdd,
  PlaylistAdd,
  Home,
  CallMissedOutgoing,
  Close,
  DragHandle,
  Star,
  StarBorder,
} from 'styled-icons/material';

// add imported icons
const icons = {
  chat: <Forum />,
  userPlus: <GroupAdd />,
  listPlus: <PlaylistAdd />,
  home: <Home />,
  out: <CallMissedOutgoing />,
  close: <Close />,
  moveBar: <DragHandle />,
  star: <StarBorder />,
  fullStar: <Star />,
};

const Icons = styled.i`
  display: inline-block;
  padding: 5px;
  cursor: pointer;

  svg {
    width: ${(props) => props.size};
    height: ${(props) => props.size};
    color: ${(props) => props.color};
  } 
`;

export default ({ icon, size, color }) => (
  <>
    <Icons icon={icon} size={size} color={color}>
      {icons[icon]}
    </Icons>
  </>
);
