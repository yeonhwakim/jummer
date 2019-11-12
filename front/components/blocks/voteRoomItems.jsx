import styled from 'styled-components';

import Ul from '../elements/ul';

export const Items = styled(Ul)`
  padding: 5px 0;
`;
export const Item = styled.li`
  padding: 5px 20px;
`;

export const ItemInfo = styled.div`
  display:flex;
  justify-content: space-between;

  .name {
    padding: 15px 15px;
    width: calc(100% - 30px - 45px - 15px);
    border-radius: 5px;
    background-color: #e0e0e0;
    font-weight: bold;
    font-size: 16px;
    color: #5e5e5e;
    cursor: pointer;
  }

  .name > div {
    width: 198px;
  }

  .counter{
    padding: 15px 10px;
    width: 51px;
    border: none;
    border-radius: 5px;
    background-color: #9e9e9e;
    font-weight: bold;
    font-size: 16px;
    color: #ffffff;
    cursor: pointer;
    text-align: center;
  }
`;
