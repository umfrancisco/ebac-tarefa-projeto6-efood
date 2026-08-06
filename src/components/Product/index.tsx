import { BackgroundImg, Card, Container } from "./styles"

type Props = {
    imgUrl: string
}

const Product = ({ imgUrl }: Props) => (

    <Container>
        <BackgroundImg style={{ backgroundImage: `url(${imgUrl})` }} />
        <Card>
            <h2>titulo</h2>
            <p>
                descrição
            </p>
        </Card>
    </Container>
)

export default Product