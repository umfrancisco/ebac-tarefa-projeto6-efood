import Header from "../../components/Header"
import type RestaurantClass from "../../models/Restaurant"
import sushi from "../../assets/images/sushi.png"
import macarrao from "../../assets/images/macarrao.png"
import Footer from "../../components/Footer"
import RestaurantList from "../../components/RestaurantList"


const restaurants: RestaurantClass[] = [
    {
        id: 1,
        imgUrl: sushi,
        infos: ["Destaque", "Japonesa"],
        path: "/restaurant/1",
        title: "Hioki Sushi",
        description: "Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!",
        review: 4.9
    },
    {
        id: 2,
        imgUrl: macarrao,
        infos: ["Italiana"],
        path: "/restaurant/2",
        title: "La Dolce Vita Trattoria",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        review: 4.6
    },
    {
        id: 3,
        imgUrl: macarrao,
        infos: ["Italiana"],
        path: "/restaurant/3",
        title: "La Dolce Vita Trattoria",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        review: 4.6
    },
    {
        id: 4,
        imgUrl: macarrao,
        infos: ["Italiana"],
        path: "/restaurant/4",
        title: "La Dolce Vita Trattoria",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        review: 4.6
    },
    {
        id: 5,
        imgUrl: macarrao,
        infos: ["Italiana"],
        path: "/restaurant/5",
        title: "La Dolce Vita Trattoria",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        review: 4.6
    },
    {
        id: 6,
        imgUrl: macarrao,
        infos: ["Italiana"],
        path: "/restaurant/6",
        title: "La Dolce Vita Trattoria",
        description: "A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!",
        review: 4.6
    }
]

const Home = () => (
    <>
        <Header isHome={true} />
        <RestaurantList restaurants={restaurants} />
        <Footer />
    </>
)

export default Home