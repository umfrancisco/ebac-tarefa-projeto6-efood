import { Container, Image, Title, Text, Button, ButtonContainer } from "./styles"

const Product = () => {

    function hello() {
        alert("Você clicou no produto");
    }

    return (
        <Container>
            <div>
                <Image src="https://placehold.co/304x167" alt="" />
                <Title>title</Title>
                <Text>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus optio at esse sequi reprehenderit nihil placeat cum aspernatur aliquid, commodi dolorem rem atque doloribus maxime, blanditiis, culpa earum saepe. Possimus!</Text>
                <ButtonContainer>
                    <Button onClick={hello}>Adicionar ao carrinho</Button>
                </ButtonContainer>
            </div>
        </Container>
    )
}

export default Product
