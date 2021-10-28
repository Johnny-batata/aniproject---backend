import styled from 'styled-components';

export const Div = styled.div`
  /* background-color: red; */
 position: fixed;
 background-color: peachpuff;
  display: flex;
 height: 100%;
 /* width: 15%; */
 flex-direction: column;
    align-items: center;
    width: 35%;

  section {
  display: flex;

    flex-direction: column;
    align-items: center;
    width: 125.328px;
    hr {
      position: relative;
    width: 100px;
    height: 0.5px;
    background-color: black;
    margin-bottom: 15.936px;
  }

  img {
    width: 80px;
    height: 80px;
    background-color: peachpuff;
    margin-top: 60px;
    border-radius: 80px;

  }
  h1 {
    margin-top: 2px;
    font-size: 1.2rem;
  }

  svg {
      width: 27px;
      height: 27px;
      left: 95px;
      top: 16px;
    position: fixed;
    }



  }

  button {
      width: 100px;
      height: 23px;
      /* background-color: red; */
    font-size: 0.83rem;
    margin-bottom: 7px;
    /* border-radius: 20px; */

    }

    button:nth-child(5) {
      margin-top: 7px;
      /* background-color: red; */
      border-radius: 10px;
      /* width:  80px; */
    }
`;
