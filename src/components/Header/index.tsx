import { Container, HeaderBar, Title } from "./styles"
import logo from "../../assets/images/logo.svg"

const Header = () => (
    <HeaderBar>
        <Container>
            <img src={logo} alt="logo" />
            <Title>Viva experiências gastronômicas <br /> no conforto da sua casa</Title>
        </Container>
    </HeaderBar>
)

export default Header
