import styled from 'styled-components';

export const TitleH2 = styled.h2`
    color: #000000;
    font-size: 27px;
    font-weight: bold; 
    margin-bottom: 0;
    margin-top: 20px;
`;

export const MainDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;
export const SubTitle = styled.p`
    color: #2E3E5C;

    font-family: Inter;
    font-style: normal;
    font-weight: 500;
    font-size: 15px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.5px;
`;
export const Section = styled.section`
    display: flex;
    p {
        color: #2E3E5C;
        font-family: Inter;
        font-style: normal;
        font-weight: 500;
        font-size: 15px;
        line-height: 25px;
        letter-spacing: 0.5px

    }
    h3 {
        color: #C90000;
        font-family: Inter;
        font-style: normal;
        font-weight: bold;
        font-size: 15px;
        line-height: 25px;
        text-align: right;
        letter-spacing: 0.5px;
        margin-left: 6px;
    }
`;

export const LogoImg = styled.img`
    width: 327px;
    height: 140px;
    margin-top: 25px;
    margin-bottom: 15px;
`;
