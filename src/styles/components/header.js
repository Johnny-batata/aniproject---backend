import styled from 'styled-components';

export const SectionDefault = styled.section`
    background-color: orange;
    height: 56px;
    display: flex;
    align-items: center;
    width: 100%;
    position:  fixed;
    justify-content: space-between;
    top: 0;
    svg {
      width: 27px;
      height: 27px;
    }

    svg:nth-child(2) {
      position: relative;
      display: flex;
      align-items: center;
    }
`;

export const Header = styled.header`
width: 100%`;
