import Product from "../Product"
import { Button, CloseButton, Container, Image, List, Modal, ModalContent, Overlay, Text, Title } from "./styles"
import pizza from "../../assets/images/pizza2.png"
import closeBtn from "../../assets/icons/close.svg"
import { useState } from "react"
import type { Cardapio } from "../../pages/Home"

type Props = {
    cardapio?: Cardapio[]
}

const ProductsList = ({ cardapio }: Props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)

    return (
        <>
            <Container>
                <Modal>
                    <ModalContent className={modalIsOpen ? "visible" : ""}>
                        <CloseButton>
                            <img src={closeBtn} onClick={() => setModalIsOpen(false)}/>
                        </CloseButton>
                        <Image src={pizza} alt="imagem de pizza" />
                        <div>
                            <Title>Pizza Marguerita</Title>
                            <Text>
                                A pizza Margherita é uma pizza clássica da culinária italiana, reconhecida por sua simplicidade e sabor inigualável. Ela é feita com uma base de massa fina e crocante, coberta com molho de tomate fresco, queijo mussarela de alta qualidade, manjericão fresco e azeite de oliva extra-virgem. A combinação de sabores é perfeita, com o molho de tomate suculento e ligeiramente ácido, o queijo derretido e cremoso e as folhas de manjericão frescas, que adicionam um toque de sabor herbáceo. É uma pizza simples, mas deliciosa, que agrada a todos os paladares e é uma ótima opção para qualquer ocasião.
                            </Text>
                            <Text>
                                Serve: de 2 a 3 pessoas
                            </Text>
                            <Button>Adicionar ao carrinho - R$ 60,90</Button>
                        </div>
                    </ModalContent>
                </Modal>
                <List>
                    {cardapio?.map(prato => (
                        <Product prato={prato} onClick={() => setModalIsOpen(true)}/>
                    ))}
                </List>
            </Container>
            <Overlay className={modalIsOpen ? "visible" : ""} onClick={() => setModalIsOpen(false)}/>
        </>
    )
}

export default ProductsList