import React from 'react';
import styled from 'styled-components';

const Title = styled.div`
  padding: 10px 25px;
  font-weight: bold;
  font-size: 20px;
  color: #5e5e5e;
`;

export default ({ children }) => <Title>{children}</Title>;
