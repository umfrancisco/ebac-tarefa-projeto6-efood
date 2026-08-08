import Tag from "../Tag"
import { BackgroundImg, Card, Container, TitleContainer, Title, Text, Infos } from "./styles"
import star from "../../assets/images/star.svg"

type Props = {
    imgUrl: string
    title: string
    description: string
    infos: string[]
    path: string
    review: number
}

const Shop = ({ imgUrl, title, description, infos, path, review }: Props) => (

    <Container>
        <BackgroundImg style={{ backgroundImage: `url(${imgUrl})` }} />
        <Infos>
            {infos.map(info => <Tag key={info} children={info} />)}
        </Infos>
        <Card>
            <TitleContainer>
                <Title>{title}</Title>
                <div>
                    <Title>{review}</Title>
                    <img src={star} />
                </div>
            </TitleContainer>
            <Text>{description}</Text>
            <Tag path={path} />
        </Card>
    </Container>
) 

export default Shop