import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.div`
    background-color: ${cores.rosa};
    margin-bottom: 32px;

    div {
        padding: 8px;
    }
`

export const Image = styled.img`
    margin-bottom: 8px;
`

export const Title = styled.h2`
    color: ${cores.branco};
    margin-bottom: 8px;
`

export const Text = styled.p`
    margin-bottom: 8px;
    line-height: 22px;
    color: ${cores.branco};
`

export const ButtonContainer = styled.div`
    background-color: ${cores.rosaClaro};
    padding: 24px 0;
    text-align: center;
    cursor: pointer;
`

export const Button = styled.a`
    color: ${cores.rosa};
    font-weight: bold;
    font-size: 14px;
`
