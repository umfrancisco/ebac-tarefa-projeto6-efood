import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import ProductList from "../../components/ProductList"
import Footer from "../../components/Footer"
import { useEffect, useState } from "react"
import type { Restaurant } from "../Home"


const RestaurantComponent = () => {

    const [restaurant, setRestaurant] = useState<Restaurant>()
    const { id } = useParams()

    useEffect(() => {
        fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
            .then(res => res.json())
            .then(data => setRestaurant(data))
    }, [])


    return (
        <>
            <Header isHome={false} />
            <Banner restaurant={restaurant} />
            <ProductList cardapio={restaurant?.cardapio}/>
            <Footer />
        </>
    )
}

export default RestaurantComponent