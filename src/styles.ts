import styled, { createGlobalStyle } from "styled-components";

export const cores = {
    branco: '#fff',
    rosaClaro: '#FFF8F2',
    rosa: '#E66767'
}

export const GlobalCss = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: Roboto, sans-serif;
    }

    body {
        background-color: ${cores.rosaClaro};
        color: ${cores.rosa};
    }
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
`