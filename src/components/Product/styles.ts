import styled from "styled-components"
import { cores } from "../../styles"
import { TagButton, TagInfo } from "../Tag/styles";

const borders = `solid 2px ${cores.rosa}`;

export const Container = styled.div`
    margin-bottom: 48px;
    position: relative;

    ${TagButton} {
        position: absolute;
        left: 8px;
        bottom: 8px;
    }
`

export const Infos = styled.div`
    position: absolute;
    top: 8px;
    right: 8px;

    ${TagInfo} {
        margin-left: 8px;
    }
`

export const Card = styled.section`
    background-color: ${cores.branco};
    border-bottom: ${borders};
    border-left: ${borders};
    border-right: ${borders};
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