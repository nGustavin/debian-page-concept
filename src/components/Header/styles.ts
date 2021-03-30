import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 3.9rem;
    background: ${props => props.theme.colors.white};
    border-radius: 0px 0px 6px 6px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0px 20px;

    @media only screen and (max-width: 768px){
        flex-direction: column;
        height: 10rem;
        gap: 10px;
        padding: 10px;

    }
`;

export const Buttons = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;

    > a{
        text-decoration : none;
        font-family: ${props => props.theme.font.default};
        color: ${props => props.theme.colors.red};

        &:hover{
            color: rgba(215, 7, 81, 0.6);
        }
    }
`
export const Search = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    >input{
        background: rgba(0, 0, 0, 0.01);
        border: 2px solid ${props => props.theme.colors.red};
        height: 30px;
        border-radius: ${props => props.theme.radius.defaultR};
        outline: none;
        padding: 5px;
        transition: 0.2s;
        
        &:hover{
            background: rgba(0, 0, 0, 0.05);
        }
        &:focus{
            background: rgba(0, 0, 0, 0.05);
        }
    }

    > button{
        background: ${props => props.theme.colors.red};
        border: 2px solid ${props => props.theme.colors.red};
        height: 30px;
        border-radius: ${props => props.theme.radius.defaultR};
        color: ${props => props.theme.colors.white};
        font-weight: 600;
        font-size: 15px;
        margin-left: -10px;
        cursor: pointer;

        &:hover{
            background: #ed1a8a;

        }
    
    }
`