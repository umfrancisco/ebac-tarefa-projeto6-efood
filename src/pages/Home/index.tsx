import Header from "../../components/Header"
import Footer from "../../components/Footer"
import RestaurantList from "../../components/RestaurantList"
import { useEffect, useState } from "react"

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


const Home = () => {

    const [restaurants, setRestaurants] = useState<Restaurant[]>([])

    useEffect(() => {
        fetch("https://api-ebac.vercel.app/api/efood/restaurantes")
            .then(res => res.json())
            .then(data => setRestaurants(data))
    }, [])

    return (
        <>
            <Header isHome={true} />
            <RestaurantList restaurants={restaurants} />
            <Footer />
        </>
    )
}

export default Home