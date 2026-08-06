import Product from "../Product";
import { Container, List } from "./styles";
import macarrao from '../../assets/images/macarrao.png'
import sushi from '../../assets/images/sushi.png'

const ProductsList = () => (
    <Container>
        <div className="container">
            <List>
                <Product imgUrl={sushi} />
                <Product imgUrl={macarrao} />
                <Product imgUrl={sushi} />
                <Product imgUrl={macarrao} />
            </List>
        </div>
    </Container>
)

export default ProductsList