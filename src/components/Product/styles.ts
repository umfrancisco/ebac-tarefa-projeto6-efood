import styled from "styled-components"
import { cores } from "../../styles";

const borders = `solid 2px ${cores.rosa}`;

export const Container = styled.div`
    margin-bottom: 48px;
`

export const BackgroundImg = styled.div`
    background-color: red;
    width: 100%;
    height: 217px;
`

export const Card = styled.section`
    border-bottom: ${borders};
    border-left: ${borders};
    border-right: ${borders};
`