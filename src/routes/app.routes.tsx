import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CoffeeShop } from '@screens/CoffeeShop'
import { Home } from '@screens/Home'
import { Order } from '@screens/Order'
import { OrderDetails } from '@screens/OrderDetails'
import { RatingPage } from '@screens/RatingPage'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Order" component={Order} />
      <Screen name="OrderDetails" component={OrderDetails} />
      <Screen name="CoffeeShop" component={CoffeeShop} />
      <Screen name="RatingPage" component={RatingPage} />
    </Navigator>
  )
}
