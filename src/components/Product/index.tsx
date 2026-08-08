import { Container, Image, Title, Text, Button, ButtonContainer } from "./styles"
import pizza from "../../assets/images/pizza.png"

const Product = () => {

    function hello() {
        alert("Você clicou no produto");
    }

    return (
        <Container>
            <div>
                <Image src={pizza} alt="" />
                <Title>Pizza Marguerita</Title>
                <Text>A clássica Marguerita: molho de tomate suculento, mussarela derretida, manjericão fresco e um toque de azeite. Sabor e simplicidade!</Text>
                <ButtonContainer>
                    <Button onClick={hello}>Adicionar ao carrinho</Button>
                </ButtonContainer>
            </div>
        </Container>
    )
}

export default Product
