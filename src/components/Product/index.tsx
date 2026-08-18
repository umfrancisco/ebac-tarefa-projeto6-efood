import { Card, Image, Title, Text, Button, ButtonContainer } from "./styles"
import type { Prato } from "../../pages/Home"

type Props = {
    prato: Prato
    onClick: () => void
}

function Product({ onClick, prato }: Props) {

    const getDescription = (description: string) => {
        if (description.length > 95) {
            return description.slice(0, 92)+" ..."
        }
        return description
    }

    return (
        <Card>
            <div>
                <Image src={prato.foto} alt={prato.nome} />
                <Title>{prato.nome}</Title>
                <Text>{getDescription(prato.descricao)}</Text>
                <ButtonContainer>
                    <Button onClick={onClick}>Adicionar ao carrinho</Button>
                </ButtonContainer>
            </div>
        </Card>
    )
}

export default Product
