import Header from "../../components/Header"
import ProductsList from "../../components/ProductsList"
import type Restaurant from "../../models/Restaurant"
import sushi from "../../assets/images/sushi.png"
import macarrao from "../../assets/images/macarrao.png"


const restaurants: Restaurant[] = [
    {
        id: 1,
        imgUrl: sushi,
        infos: ["Destaque", "Japonesa"],
        path: "/hioki-sushi",
        title: "Hioki Sushi",
        description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!"
    },
    {
        id: 2,
        imgUrl: macarrao,
        infos: ["Italiana"],
        path: "/dolce-vita",
        title: "La Dolce Vita Trattoria",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!"
    }
]

const Home = () => (
    <>
        <Header />
        <ProductsList restaurants={restaurants} />
    </>
)

export default Home