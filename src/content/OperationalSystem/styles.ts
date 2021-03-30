import styled from 'styled-components';

export const Container = styled.div`
    height: auto;
    width: 100%;
    padding: 8px;   
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 8px;
`;

export const Section = styled.div`
    width: 100%;
    height: auto;
    background: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.radius.defaultR};
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: space-around;

    @media only screen and (max-width: 768px){
        flex-direction: column;
        padding: 0px 8px;
    }
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;
    width: auto;
    padding: 30px;
    gap: 40px;

    >div{
        display: flex;
        flex-direction: column;
        align-items: space-between;
        justify-content: center;
        gap: 10px;

        >h1{
            font-size: 34px;
            font-weight: 400;
            color: ${props => props.theme.colors.background};
        }

        >h2{
            font-size: 24px;
            font-weight: 300;
            color: ${props => props.theme.colors.background};
        }
    }
`
export const Download = styled.div`
    display: flex;
    flex-direction: column;
    gap: 50px;
    align-items: center;
    justify-content: center;
    padding: 8px;

    >img{
        width: 230px;
    }

    >button{
        width: 150px;
        height: 34px;
        background: ${props => props.theme.colors.red};
        color: ${props => props.theme.colors.white};
        border: none;
        border-radius: ${props => props.theme.radius.defaultR};
        font-weight: 600;
        font-size: 16px;

        &:hover{
            cursor: pointer;

        }
    }
`
