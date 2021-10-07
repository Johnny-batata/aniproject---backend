import styled from 'styled-components';

export const Header = styled.header`
    background-color: orange;
    height: 40px;
    display: flex;
    align-items: center;
    width: 100%;
    position: relative;
    justify-content: space-between;
    svg {
      width: 27px;
      height: 27px;
    }

    svg:nth-child(2) {
      /* left: 300px; */
      position: relative;
      display: flex;
      align-items: center;
    }
`;
