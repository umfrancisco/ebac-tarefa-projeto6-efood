import { Container, Image, Title, Text, Button, ButtonContainer } from "./styles"
import type { Cardapio } from "../../pages/Home"

type Props = {
    prato: Cardapio
    onClick: () => void
}

const Product = ({ onClick, prato }: Props) => {

    return (
        <Container>
            <div>
                <Image src={prato.foto} alt={prato.nome} />
                <Title>{prato.nome}</Title>
                <Text>{prato.descricao}</Text>
                <ButtonContainer>
                    <Button onClick={onClick}>Adicionar ao carrinho</Button>
                </ButtonContainer>
            </div>
        </Container>
    )
}

export default Product
