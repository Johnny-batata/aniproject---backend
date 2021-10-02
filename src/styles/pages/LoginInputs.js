import styled from 'styled-components';

export const InputContainers = styled.section`
    position: relative;
    display: flex;
    flex-direction: column;
    p {
        display: flex;
        justify-content: flex-end;
        margin-bottom: 20px;
        margin-top: 10px;
    }
`;
export const EmailContainer = styled.label`
    svg {  
           font-size: 1.4rem;
           left: 28px;
           position: absolute; 
           bottom: 206px;
    }    
`;

export const PasswordContainer = styled.div`
    svg {  
           font-size: 1.4rem;
           left: 28px;
           position: absolute; 
           bottom: 136px;
    }
    div {
        border:none; 
        outline:none;
        right: 40px;
           bottom: 245px;
           display : flex ;

        svg {
            position: absolute;
            left: 280px;
           bottom: 136px;

        }
    }
    
    
`;

export const Input = styled.input`
    background: #FFFFFF;
    border: 1px solid #D0DBEA;
    box-sizing: border-box;
    border-radius: 32px;
    Width: 327px;
    Height: 56px;
    margin-bottom: 15px ;
    outline: none;
    padding: .5rem 3.5rem .5rem 3.5rem ;
    font-size: 20px;
`;

export const ButtonLogin = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 19px 32px;
    Width: 327px;
    Height: 56px;
    background: #C90000;
    border-radius: 32px;
    color: white;
    font-size: 18px;

`;
