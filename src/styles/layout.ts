import styled from 'styled-components'

const Layout = styled.div`
    height: 100vh;
    width: 100vw;
    background: ${props => props.theme.colors.background};
    display: flex;
    align-items: flex-start;
    justify-content: center;
`

export default Layout