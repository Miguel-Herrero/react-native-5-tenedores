import { createStackNavigator } from "react-navigation-stack";
import TopRestaurantsScreens from "../screens/TopRestaurants";

const TopListsScreenStacks = createStackNavigator({
    TopRestaurants: {
        screen: TopRestaurantsScreens,
        navigationOptions: () => ({
            title: "Los mejores restaurantes"
        })
    }
})

export default TopListsScreenStacks