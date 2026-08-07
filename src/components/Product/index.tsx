import Tag from "../Tag"
import { BackgroundImg, Card, Container, Title, Text, Infos } from "./styles"

type Props = {
    imgUrl: string
    title: string
    description: string
    buttonTag: string
    infos: string[]
    path: string
}

const Product = ({ imgUrl, title, description, buttonTag, infos, path }: Props) => (

    <Container>
        <BackgroundImg style={{ backgroundImage: `url(${imgUrl})` }} />
        <Infos>
            {infos.map(info => <Tag key={info} type="top" children={info} path={path} />)}
        </Infos>
        <Card>
            <Title>{title}</Title>
            <Text>{description}</Text>
            <Tag type="bottom" path={path} children={buttonTag} />
        </Card>
    </Container>
)

export default Product