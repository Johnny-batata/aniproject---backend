import styled from 'styled-components';

export const Div = styled.div`
    display: flex;
    height: 291.438px;
  section {
    
    display: flex;
    flex-direction: column;
    /* background-color: red; */
    width: 100%;
    text-align: center;
    align-items: center;

    img {
      width: 160px;
      border-radius: 80px;
      align-items: center;
      margin-top: 70px;
    }
    h1 {
      margin: 2px;
    }
    p {
      margin: 2px;
    }
  }

`;

export const Section = styled.section`
margin-top: 40px;
  /* background-color: green; */
  height: 100% ;
  display: flex;
  width: 100%;
  nav {
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    align-items: center;
    /* background-color: indigo; */
    button {
      width: 80%;
      height: 40px;
      border-radius: 20px;
      margin: 5px;
      font-size: 1.3rem;
      /* font-size: 18px; */
      
    }
    button:nth-child(3) {
      background-color: orange;
    }
  }
  `;
