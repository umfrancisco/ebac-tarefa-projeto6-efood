import Restautant from "../Restaurant"
import { List } from "./styles"
import type RestaurantClass from "../../models/Restaurant"

export type Props = {
    restaurants: RestaurantClass[]
}

const RestaurantList = ({ restaurants }: Props) => (
    <div className="container">
        <List>
            {restaurants.map(restaurant => (
                <Restautant
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

export default RestaurantList