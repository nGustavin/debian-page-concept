import styled from 'styled-components'

const Layout = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.colors.background};
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: column;
`

export default Layout