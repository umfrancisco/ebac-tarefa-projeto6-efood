import Header from "../../components/Header"
import Footer from "../../components/Footer"
import RestaurantList from "../../components/RestaurantList"
import { useGetRestaurantsQuery } from "../../services/api"

export type Prato = {
    id: number
    foto: string
    preco: number
    nome: string
    descricao: string
    porcao: string
}

export type Restaurant = {
    id: number
    titulo: string
    destacado: boolean
    tipo: string
    avaliacao: number
    descricao: string
    capa: string
    cardapio: Prato[]
}


function Home() {

    const { data: restaurants } = useGetRestaurantsQuery()
    
    if (restaurants) {
        return (
            <>
                <Header isHome={true} />
                <RestaurantList restaurants={restaurants} />
                <Footer />
            </>
        )
    }

    return (
        <div>
            <p>Carregando...</p>
        </div>
    )
}

export default Home