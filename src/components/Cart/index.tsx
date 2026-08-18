import { Button, CartContainer, CartItem, Overlay, Sidebar, TotalPrice, Infos } from "./styles"
import { useDispatch, useSelector } from "react-redux"
import type { RootReducer } from "../../store"
import { close } from "../../store/reducers/cart"

function Cart() {

    const { isOpen, items } = useSelector((state: RootReducer) => state.cart)
    const dispatch = useDispatch()

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

    return(
        <CartContainer className={isOpen ? "is-open" : ""}>
            <Overlay onClick={closeCart}/>
            <Sidebar>
                <ul>
                    {items.map(item => (
                        <CartItem key={item.id}>
                            <img src={item.foto} />
                            <Infos>
                                <p>{item.nome}</p>
                                <span>{priceFormat(item.preco)}</span>
                            </Infos>
                            <button />
                        </CartItem>
                    ))}
                </ul>
                <TotalPrice>
                    <p>Valor total</p>
                    <p>{priceFormat(getTotalPrice())}</p>
                </TotalPrice>
                <Button>Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart