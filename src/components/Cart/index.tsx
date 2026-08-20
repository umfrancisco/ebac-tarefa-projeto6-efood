import { Button, CartContainer, CartItem, Overlay, Sidebar, TotalPrice, Infos, TrashCan, Checkout } from "./styles"
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
                    <h4 style={{ color: "white" }}>hello world 1</h4>
                    <Button onClick={goForward}>Continuar</Button>
                    <Button onClick={goBackward}>Voltar</Button>
                </Checkout>

                <Checkout className={checkout === 2 ? "" : "is-hidden"}>
                    <h4 style={{ color: "white" }}>hello world 2</h4>
                    <Button onClick={goForward}>Continuar</Button>
                    <Button onClick={goBackward}>Voltar</Button>
                </Checkout>

                <Checkout className={checkout === 3 ? "" : "is-hidden"}>
                    <h4 style={{ color: "white" }}>fim</h4>
                    <Button onClick={goBackward}>Voltar</Button>
                </Checkout>
                
            </Sidebar>
        </CartContainer>
    )
}

export default Cart