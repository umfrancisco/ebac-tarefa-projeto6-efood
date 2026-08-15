import Product from "../Product"
import { Button, CloseButton, Container, Image, List, Modal, ModalContent, Overlay, Text, Title } from "./styles"
import closeBtn from "../../assets/icons/close.svg"
import { useState } from "react"
import type { Prato } from "../../pages/Home"

type Props = {
    cardapio?: Prato[]
}

const ProductsList = ({ cardapio }: Props) => {

    const [modalIsOpen, setModalIsOpen] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState<Prato | null>(null)
    
    function handleOpenModal(prato: Prato) {
        setSelectedProduct(prato)
        setModalIsOpen(true)
    }

    function handleCloseModal() {
        setModalIsOpen(false)
        setSelectedProduct(null)
    }

    const priceFormat = (price = 0) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(price)
    }

    return (
        <>
            <Container>
                <Modal>
                    <ModalContent className={modalIsOpen ? "visible" : ""}>
                        <CloseButton>
                            <img src={closeBtn} onClick={() => setModalIsOpen(false)}/>
                        </CloseButton>
                        <Image src={selectedProduct?.foto} alt={selectedProduct?.nome} />
                        <div>
                            <Title>{selectedProduct?.nome}</Title>
                            <Text>
                                {selectedProduct?.descricao}
                            </Text>
                            <Text>
                                {selectedProduct?.porcao}
                            </Text>
                            <Button>Adicionar ao carrinho - {priceFormat(selectedProduct?.preco)}</Button>
                        </div>
                    </ModalContent>
                </Modal>
                <List>
                    {cardapio?.map(prato => (
                        <Product key={prato.id} prato={prato} onClick={() => handleOpenModal(prato)}/>
                    ))}
                </List>
            </Container>
            <Overlay className={modalIsOpen ? "visible" : ""} onClick={() => handleCloseModal()}/>
        </>
    )
}

export default ProductsList