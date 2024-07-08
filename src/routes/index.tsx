import React from 'react'

// screens
import HomeScreen from '@/app/screens/Home'
import ServicosScreen from '@/app/screens/Servicos'

// Themes
import theme from '@/styles/theme'

// icons
import { Feather, MaterialCommunityIcons } from '@expo/vector-icons'

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationProp } from '@react-navigation/native'

export type Screens = ['Home', 'Servicos']
export type RootStackParamList = Record<Screens[number], undefined>
export type StackNavigation = NavigationProp<RootStackParamList>

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>()

const themeColor = theme.light.colors

export function StackRoutes() {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveTintColor: themeColor.tabButton.selected.textColor,
        tabBarInactiveTintColor: themeColor.tabButton.unselected.textColor,
        tabBarIconStyle: {
          fontSize: 24,
        },
        tabBarShowLabel: false,
      }}
    >
      <Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />
          },
        }}
      />
      <Screen
        name="Servicos"
        component={ServicosScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                size={size}
                name="file-document-outline"
                color={color}
              />
            )
          },
        }}
      />
    </Navigator>
  )
}
