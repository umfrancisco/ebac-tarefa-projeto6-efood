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
                    key={restaurant.id}
                    imgUrl={restaurant.imgUrl}
                    infos={restaurant.infos}
                    path={restaurant.path}
                    title={restaurant.title}
                    description={restaurant.description}
                    review={restaurant.review}
                />
            ))}
        </List>
    </div>
)

export default ProductsList