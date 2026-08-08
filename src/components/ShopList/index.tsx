import Shop from "../Shop"
import { List } from "./styles"
import type Restaurant from "../../models/Restaurant"

export type Props = {
    restaurants: Restaurant[]
}

const ShopList = ({ restaurants }: Props) => (
    <div className="container">
        <List>
            {restaurants.map(restaurant => (
                <Shop
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

export default ShopList