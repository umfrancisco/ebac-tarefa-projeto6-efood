import styled from "styled-components"
import { cores } from "../../styles"

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 120px;
`

export const List = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 32px;
    margin-top: 56px;
    margin-botttom: 120px;
`

export const Title = styled.h4`
    font-size: 18px;
    padding-top: 32px;
    color: ${cores.branco};
`

export const Text = styled.p`
    font-size: 14px;
    line-height: 22px;
    padding-top: 16px;
    padding-right: 32px;
    color: ${cores.branco};
`

export const Button = styled.button`
    background-color: ${cores.branco};
    color: ${cores.rosa};
    padding: 4px 6px;
    margin-top: 16px;
    font-weight: bold;
    border: none;
`

export const Image = styled.img`
    margin: 32px;
    height: 280px;
    width: 280px;
    object-fit: cover;
`

export const Modal = styled.div`
    background-color: ${cores.rosa};
    position: fixed;
    max-width: 1024px;
    width: 100%;
    top: 0;
    margin-top: 210px;
    z-index: 1;
`

export const ModalContent = styled.div`
    display: none;
    position: relative;

    &.visible {
        display: flex;
    }
`

export const CloseButton = styled.div`
    color: ${cores.branco};
    cursor: pointer;
    margin-top: 8px;
    margin-right: 8px;
    position: absolute;
    top: 0;
    right: 0;
`

export const Overlay = styled.div`
    background-color: rgba(0,0,0,0.8);
    position: fixed;
    display: none;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;

    &.visible {
        display: flex;
    }
`