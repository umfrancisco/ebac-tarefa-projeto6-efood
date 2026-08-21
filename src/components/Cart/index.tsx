import { Button, CartContainer, CartItem, Overlay, Sidebar, TotalPrice, Infos, TrashCan, Checkout, Title, Form, Row } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import type { RootReducer } from "../../store"
import { close, remove, forward, backward } from "../../store/reducers/cart"

function Cart() {

    const { isOpen, items, checkout } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

    const goForward = () => {
        dispatch(forward())
    }

    const goBackward = () => {
        dispatch(backward())
    }

    const closeCart = () => {
        dispatch(close())
    }

    const priceFormat = (price = 0) => {
        return new Intl.NumberFormat("pt-BR", {
            style: "currency",
            currency: "BRL"
        }).format(price)
    }

    const getTotalPrice = () => {
        return items.reduce((total, item) => {
            return total + (item.preco ?? 0)
        }, 0)
    }

    const removeItem = (id: number) => {
        dispatch(remove(id))
    }

    return(
        <CartContainer className={isOpen ? "is-open" : ""}>
            <Overlay onClick={closeCart}/>
            <Sidebar>

                <Checkout className={checkout === 0 ? "" : "is-hidden"}>
                    <ul>
                        {items.map(item => (
                            <CartItem key={item.id}>
                                <img src={item.foto} />
                                <Infos>
                                    <p>{item.nome}</p>
                                    <span>{priceFormat(item.preco)}</span>
                                </Infos>
                                <TrashCan onClick={() => removeItem(item.id)}/>
                            </CartItem>
                        ))}
                    </ul>
                    <TotalPrice>
                        <p>Valor total</p>
                        <p>{priceFormat(getTotalPrice())}</p>
                    </TotalPrice>
                    <Button onClick={goForward}>Continuar com a entrega</Button>
                </Checkout>

                <Checkout className={checkout === 1 ? "" : "is-hidden"}>
                    <Title style={{ color: "white" }}>Entrega</Title>
                    <Form>
                        <Row>
                            <label htmlFor="name">Quem irá receber</label>
                            <input id="name" type="text" />
                        </Row>
                        <Row>
                            <label htmlFor="address">Endereço</label>
                            <input id="address" type="text" />
                        </Row>
                        <Row>
                            <label htmlFor="city">Cidade</label>
                            <input id="city" type="text" />
                        </Row>
                        <Row className="special-row">
                            <div>
                                <label htmlFor="cep">CEP</label>
                                <input id="cep" type="text" />
                            </div>
                            <div>
                                <label htmlFor="number">Número</label>
                                <input id="number" type="number" />
                            </div>
                        </Row>
                        <Row>
                            <label htmlFor="addr-add-info">Complemento (opcional)</label>
                            <input id="addr-add-info" type="text" />
                        </Row>
                    </Form>
                    <Button onClick={goForward}>Continuar</Button>
                    <Button onClick={goBackward}>Voltar</Button>
                </Checkout>

                <Checkout className={checkout === 2 ? "" : "is-hidden"}>
                    <Title style={{ color: "white" }}>Pagamento - Valor a pagar R$ 190,90</Title>
                    <Button onClick={goForward}>Continuar</Button>
                    <Button onClick={goBackward}>Voltar</Button>
                </Checkout>

                <Checkout className={checkout === 3 ? "" : "is-hidden"}>
                    <Title style={{ color: "white" }}>Pedido realizado</Title>
                    <Button onClick={goBackward}>Voltar</Button>
                </Checkout>
                
            </Sidebar>
        </CartContainer>
    )
}

export default Cart