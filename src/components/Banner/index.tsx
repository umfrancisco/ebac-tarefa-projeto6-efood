import type { Restaurant } from "../../pages/Home"
import { Container, MainTitle, Overlay, SecondaryTitle } from "./styles"

type Props = {
    restaurant?: Restaurant
}

const Banner = ({ restaurant }: Props) => {

    return (
        <>
            <Container style={{ backgroundImage: `url(${restaurant?.capa})` }}>
                <Overlay />
                <div className="container">
                    <SecondaryTitle>{restaurant?.tipo}</SecondaryTitle>
                    <MainTitle>{restaurant?.titulo}</MainTitle>
                </div>
            </Container>
        </>
    )
}

export default Banner