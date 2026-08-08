import Product from "../Product"
import { List } from "./styles"
import type Restaurant from "../../models/Restaurant"

export type Props = {
    restaurants: Restaurant[]
}

const ProductsList = ({ restaurants }: Props) => (
    <div className="container">
        <List>
            {restaurants.map(restaurant => (
                <Product 
                    imgUrl={restaurant.imgUrl} 
                    buttonTag={restaurant.buttonTag}
                    infos={restaurant.infos}
                    path={restaurant.path}
                    title={restaurant.title}
                    description={restaurant.description}
                />
            ))}
        </List>
    </div>
)

export default ProductsList