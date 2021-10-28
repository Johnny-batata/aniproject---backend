import styled from 'styled-components';

export const div = styled.div`
display: flex;
margin-bottom: 10px;
width: 170px;
flex-direction: column;
margin-right: 10px;
height: 250px;
img {
   justify-content: center;
   width: 170px;
   height: 170px;
}
p {
   font-size: 16px;
   margin: 0;
   white-space:pre;
    overflow:hidden;
    text-overflow: ellipsis;
   svg {
      font-size: 16px;
   }
}
p:hover{
   white-space:normal;
    text-overflow: inherit;
    overflow: visible;
}


`;

export const section = styled.section`
display: flex;
flex-wrap: wrap;
justify-content: center;
`;

export const ButtonsDiv = styled.div`
  display: flex;
  margin-bottom: 65px;
  margin-top: 10px;
  flex-wrap: wrap;
   button {
     width: 30px;
     height: 30px;
     align-items: center;
   }
`;

export const Categorydiv = styled.div`
  margin-top: ${(props) => props.marginTop};
  display: flex;
  height: 46px;
  max-width:100% ;
  overflow-x: auto;
  overflow-y: hidden;
  scroll-behavior: smooth;

  button {
    width: 115px;
    height: 35px;
    white-space:pre;
    text-overflow: ellipsis;
    background-color: green;
  }
`;
