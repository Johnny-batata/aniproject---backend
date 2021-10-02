import styled from "styled-components"

export const MainDiv = styled.div`
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;


  section{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;

    input {
      background: #FFFFFF;
      border: 1px solid #D0DBEA;
      box-sizing: border-box;
      border-radius: 32px;
      Width: 327px;
      margin-bottom: 15px ;
      outline: none;
      padding: .5rem 3.5rem .5rem 3.5rem ;
      font-size: 20px;
    }
    input:nth-child(6){
      padding: .5rem 1.0rem .5rem 3.5rem ;

    }
    svg{
      font-size: 1.3rem;
      position: absolute;
      left: 23px;

    }
    svg:nth-child(2){
      bottom:254px
    }
    svg:nth-child(3){
      bottom:197px
    }
    svg:nth-child(4){
      bottom:140px
    }
    svg:nth-child(8){
      bottom:81px
    }
    svg:nth-child(9){
      bottom:26px
    }
    svg:nth-child(11){
      left: 285px;
      bottom:26px
    }
  }
`

// export const InputsSection = styled.section`

// ` 