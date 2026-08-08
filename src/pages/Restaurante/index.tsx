import Header from "../../components/Header"
import Banner from "../../components/Banner"
import ProductsList from "../../components/ProductsList"


const Restaurant = () => (
    <>
        <Header isHome={false} />
        <Banner />
        <ProductsList />
    </>
)

export default Restaurant