import styled from 'styled-components'

export const AddItemForm = styled.form`
  div {
    position: relative;
    margin: auto;
    width: calc(100% - 40px);
    height: 45px;
    border: solid 2px #f1c40f; 
    border-radius: 5px;
    background-color: #ffffff;
    box-sizing: border-box;
  }

  input {
    position: absolute;
    left: 1px;
    box-sizing: border-box;
    border: 0;
    border-radius: 5px;
    width: 255px; 
    height: 40px;
    font-size: 15px; 
    font-weight: 400;
    color: #303030;
    padding: 0 15px;
  }

  button {
    position: absolute;
    right: 0;
    width: 60px;
    height: 100%;
    border :none;
    background-color: #f1c40f;
    font-weight: bold; 
    font-size: 16px; 
    color: #5e5e5e;
    cursor: pointer;
  }
`