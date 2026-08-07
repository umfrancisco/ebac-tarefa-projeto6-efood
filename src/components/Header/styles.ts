import styled from "styled-components"
import backgroundImg from "../../assets/images/Hero.png"

export const HeaderBar = styled.header`
    background-color: red;
    background-image: url(${backgroundImg});

    div {
        max-width: 1024px;
        width: 100%;
        margin: 0 auto;
        text-align: center;
        padding: 40px 0;
    }
        
    h2 {
        padding-top: 138px;
        font-size: 36px;
    }
`
