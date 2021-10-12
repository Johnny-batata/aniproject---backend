import styled from 'styled-components';

export const Div = styled.div`
  display: flex;
  /* background-color: red; */
  height: 100px;
  margin-top: 70px;
  flex-direction: column;

  input {
    height: 40px;
    border-radius: 60px;

  }

  svg {
    width: 35px;
    height: 35px;
    position: absolute; 
  }

  svg:nth-child(2) {
    /* background-color: yellow; */
    right: 25px;
    top: 75px;
  }

  svg:nth-child(3) {
    /* background-color: yellow; */
    left: 130px;
    top: 123px;

  }

  svg:nth-child(4) {
    /* background-color: yellow; */
    left: 70px;
    left: 180px;
    top: 123px;
  }

`;
