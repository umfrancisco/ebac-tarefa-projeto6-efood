import styled from "styled-components"
import { cores } from "../../styles"

const textColor = cores.branco

export const Container = styled.div`
    background-repeat: no-repeat;
    background-size: cover;
`

export const MainTitle = styled.h2`
    padding-bottom: 32px;
    font-weight: 900;
    color: ${textColor};
`
    
export const SecondaryTitle = styled.h2`
    padding-top: 24px;
    padding-bottom: 156px;
    font-weight: 100;
    color: ${textColor};
`