import HomeScreen from '@/app/screens/Home'
import ServicosScreen from '@/app/screens/Servicos'
import { ThemeWrapper } from '@/layout/theme-wrapper'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <ThemeWrapper>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Servicos" component={ServicosScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </ThemeWrapper>
  )
}
