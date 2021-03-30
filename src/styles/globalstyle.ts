import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        box-sizing: border-box;
        padding: none;
        margin: 0;
    }

    h1, h2, input, button, span, strong{
        font-family: 'Ubuntu', sans-serif;
    }
`