import styled from 'styled-components';

export const div = styled.div`
display: flex;
/* background-color: blue; */
margin-bottom: 10px;
width: 170px;
flex-direction: column;
margin-right: 10px;
height: 250px;
img {
   justify-content: center;
   width: 170px;
   height: 170px;
   /* height: 143px; */

}
p {
   /* margin-bottom:2px; */
   font-size: 16px;
   margin: 0;
   white-space:pre;
    overflow:hidden;
    text-overflow: ellipsis;
   svg {
      /* background-color: yellow; */
      /* color: yellow; */
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
button {
  /* background-color: hotpink; */
  width: 30px;
  height: 30px;
  align-items: center;
}
`;

export const Categorydiv = styled.div`
margin-top: ${(props) => props.marginTop};
   /* margin-top: 39px; */
   display: flex;
 /* position: relative; */
 background-color: pink;
 max-width:100% ;
 overflow-x: auto;
 overflow-y: hidden;
 scroll-behavior: smooth;
 button {
   width: 80px;
   height: 35px;
 background-color: green;
 /* position: absolute; */

 }
`;
