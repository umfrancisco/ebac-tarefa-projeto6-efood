import { Button, CartContainer, CartItem, Overlay, Sidebar, TotalPrice, Infos } from "./styles"
import pizza from "../../assets/images/pizza2.png"

function Cart() {

    return(
        <CartContainer>
            <Overlay />
            <Sidebar>
                <ul>
                    <CartItem>
                        <img src={pizza} />
                        <Infos>
                            <p>Pizza Marguerita</p>
                            <span>R$ 60,90</span>
                        </Infos>
                        <button />
                    </CartItem>
                    <CartItem>
                        <img src={pizza} />
                        <Infos>
                            <p>Pizza Marguerita</p>
                            <span>R$ 60,90</span>
                        </Infos>
                        <button />
                    </CartItem>
                    <CartItem>
                        <img src={pizza} />
                        <Infos>
                            <p>Pizza Marguerita</p>
                            <span>R$ 60,90</span>
                        </Infos>
                        <button />
                    </CartItem>
                </ul>
                <TotalPrice>
                    <p>Valor total</p>
                    <p>R$ 182,70</p>
                </TotalPrice>
                <Button>Continuar com a entrega</Button>
            </Sidebar>
        </CartContainer>
    )
}

export default Cart