import Product from "../Product"
import { List } from "./styles"
import macarrao from "../../assets/images/macarrao.png"
import sushi from "../../assets/images/sushi.png"

const ProductsList = () => (
    <div className="container">
        <List>
            <Product 
                imgUrl={sushi} 
                buttonTag="Saiba mais"
                infos={["Destaque", "Japonesa"]}
                path="/sushi"
                title="Hioki Sushi" 
                description="Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!" 
            />
            <Product 
                imgUrl={macarrao} 
                buttonTag="Saiba mais"
                infos={["Italiana"]}
                path="/macarrao"
                title="La Dolce Vita Trattoria" 
                description="A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!" 
            />
        </List>
    </div>
)

export default ProductsList