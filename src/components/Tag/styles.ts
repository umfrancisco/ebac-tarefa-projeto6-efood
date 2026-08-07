import styled from "styled-components"
import { cores } from "../../styles"
import type { Props } from "."

const backgroundColor = cores.rosa
const textColor = cores.branco
const displayTipe = "inline-block"
const paddingSize = "4px 6px";

export const TagContainer = styled.div<Props>`
    background-color: ${backgroundColor};
    color: ${textColor};
    display: ${displayTipe};
    padding: ${paddingSize};
`

export const TagButton = styled.div<Props>`
    background-color: ${backgroundColor};
    color: ${textColor};
    display: ${displayTipe};
    padding: ${paddingSize};
`