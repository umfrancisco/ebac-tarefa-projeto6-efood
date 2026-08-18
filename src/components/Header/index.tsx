import { useDispatch } from "react-redux"
import { Container, HeaderBar, RestaurantContainer, Title } from "./styles"
import logo from "../../assets/icons/logo.svg"
import { Link } from "react-router-dom"
import { open } from "../../store/reducers/cart"

export type Props = {
    isHome?: boolean
}

function Header({ isHome }: Props) {

    const dispatch = useDispatch()

    const openCart = () => {
        dispatch(open())
    }

    if (isHome) {
        return (
            <HeaderBar>
                <Container>
                    <img src={logo} alt="logo" />
                    <Title>Viva experiências gastronômicas <br /> no conforto da sua casa</Title>
                </Container>
            </HeaderBar>
        )
    }
    return (
        <HeaderBar>
            <RestaurantContainer>
                <h2><Link to="/">Restaurantes</Link></h2>
                <img src={logo} alt="logo" />
                <button onClick={openCart}>0 produto(s) no carrinho</button>
            </RestaurantContainer>
        </HeaderBar>
    )

}

export default Header
