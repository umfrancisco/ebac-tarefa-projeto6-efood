import img from "../../assets/images/background-img.png"
import { Container, MainTitle, SecondaryTitle } from "./styles"

const Banner = () => (
    <Container style={{ backgroundImage: `url(${img})` }}>
        <div className="container">
            <SecondaryTitle>Italiana</SecondaryTitle>
            <MainTitle>La Dolce Vita Trattoria</MainTitle>
        </div>
    </Container>
)

export default Banner