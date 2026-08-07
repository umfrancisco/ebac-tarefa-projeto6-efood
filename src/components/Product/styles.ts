import styled from "styled-components"
import { cores } from "../../styles"
import { TagContainer } from "../Tag/styles";

const borders = `solid 2px ${cores.rosa}`;

export const Container = styled.div`
    margin-bottom: 48px;
`

export const Card = styled.section`
    border-bottom: ${borders};
    border-left: ${borders};
    border-right: ${borders};
    position: relative;

    ${TagContainer} {
        position: absolute;
        display: inline-block;
        left: 8px;
        bottom: 8px;
    }
`

export const Title = styled.h2`
    padding-top: 8px;
    padding-left: 8px;
`

export const Text = styled.p`
    font-size: 14px;
    line-height: 22px;
    padding-top: 16px;
    padding-bottom: 48px;
    padding-left: 8px;
    padding-right: 8px;
`

export const BackgroundImg = styled.div`
    background-color: red;
    width: 100%;
    height: 217px;
`