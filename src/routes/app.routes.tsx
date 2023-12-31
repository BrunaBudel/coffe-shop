import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { CoffeeShop } from '@screens/CoffeeShop'
import { EmployeesList } from '@screens/EmployeesList'
import { Home } from '@screens/Home'
import { Order } from '@screens/Order'
import { RatingPage } from '@screens/RatingPage'

const { Navigator, Screen } = createNativeStackNavigator()

export function AppRoutes() {
  return (
    <Navigator initialRouteName="Home" screenOptions={{ headerShown: false }}>
      <Screen name="Home" component={Home} />
      <Screen name="Order" component={Order} />
      <Screen name="CoffeeShop" component={CoffeeShop} />
      <Screen name="RatingPage" component={RatingPage} />
      <Screen name="EmployeesList" component={EmployeesList} />
    </Navigator>
  )
}
