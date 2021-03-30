import styled from 'styled-components';

type Props = {
    isTransparent?: boolean;
}

export const Container = styled.div<Props>`
    background: ${props => (props.isTransparent ? "none" : props.theme.colors.red)};
    width: 100%;
    height: 120px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    color: ${props => props.theme.colors.white};
    border-radius: ${props => props.theme.radius.defaultR};

    >h1{
        font-weight: 400;

    }

    >h2{
        font-weight: 400;
        font-size: 20px;
    }
`;
