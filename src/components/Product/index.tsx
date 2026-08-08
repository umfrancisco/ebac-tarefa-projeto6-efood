import Tag from "../Tag"
import { BackgroundImg, Card, Container, Title, Text, Infos } from "./styles"

type Props = {
    imgUrl: string
    title: string
    description: string
    infos: string[]
    path: string
}

const Product = ({ imgUrl, title, description, infos, path }: Props) => (

    <Container>
        <BackgroundImg style={{ backgroundImage: `url(${imgUrl})` }} />
        <Infos>
            {infos.map(info => <Tag key={info} children={info} />)}
        </Infos>
        <Card>
            <Title>{title}</Title>
            <Text>{description}</Text>
            <Tag path={path} />
        </Card>
    </Container>
)

export default Product