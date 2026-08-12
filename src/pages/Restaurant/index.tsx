import { useParams } from "react-router-dom"
import Header from "../../components/Header"
import Banner from "../../components/Banner"
import ProductsList from "../../components/ProductsList"
import Footer from "../../components/Footer"


const Restaurant = () => {

    const { id } = useParams()
    console.log(id)

    return (
        <>
            <Header isHome={false} />
            <Banner />
            <ProductsList />
            <Footer />
        </>
    )
}

export default Restaurant