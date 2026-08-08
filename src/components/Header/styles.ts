import styled from "styled-components"
import backgroundImg from "../../assets/images/Hero.png"

export const HeaderBar = styled.header`
    background-color: red;
    background-image: url(${backgroundImg});
`

export const Container = styled.div`
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
    text-align: center;
    padding: 40px 0;
`

export const Title = styled.h2`
    padding-top: 138px;
    font-size: 36px;
`
