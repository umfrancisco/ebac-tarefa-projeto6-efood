import Tag from "../Tag"
import { BackgroundImg, Card, Container, Title, Text } from "./styles"

type Props = {
    imgUrl: string
    title: string
    description: string
    buttonTag: string
}

const Product = ({ imgUrl, title, description, buttonTag }: Props) => (

    <Container>
        <BackgroundImg style={{ backgroundImage: `url(${imgUrl})` }} />
        <Card>
            <Title>{title}</Title>
            <Text>{description}</Text>
            <Tag children={buttonTag} />
        </Card>
    </Container>
)

export default Product