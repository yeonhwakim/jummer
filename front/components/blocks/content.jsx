import React from 'react';
import styled from 'styled-components';

import Title from '../elements/title';

const Content = styled.div`
  width: 100%;
  height: calc(100% - 65.39px);
  overflow: auto;
`;

export default ({ title, children }) => (
  <Content>
    <Title>{title}</Title>
    { children }
  </Content>
);
