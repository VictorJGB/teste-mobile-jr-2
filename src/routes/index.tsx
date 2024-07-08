import HomeScreen from '@/app/screens/Home'
import ServicosScreen from '@/app/screens/Servicos'
import { NavigationProp } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

export type Screens = ['Home', 'Servicos']
export type RootStackParamList = Record<Screens[number], undefined>
export type StackNavigation = NavigationProp<RootStackParamList>

const { Navigator, Screen } = createNativeStackNavigator<RootStackParamList>()

export function StackRoutes() {
  return (
    <Navigator initialRouteName="Home">
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Servicos" component={ServicosScreen} />
    </Navigator>
  )
}
