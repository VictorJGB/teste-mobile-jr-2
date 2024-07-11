import React from 'react'

// screens
import BookScreen from '@/app/screens/Book'
import BookingsScreen from '@/app/screens/Bookings'
import HomeScreen from '@/app/screens/Home'
import ServicesScreen from '@/app/screens/Services'

// Themes
import Theme from '@/styles/Theme'

// icons
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from '@expo/vector-icons'

// Navigation
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationProp } from '@react-navigation/native'

export type Screens = ['Home', 'Services', 'Bookings', 'Book']
export type RootStackParamList = Record<Screens[number], undefined>
export type StackNavigation = NavigationProp<RootStackParamList>

const { Navigator, Screen } = createBottomTabNavigator<RootStackParamList>()

const themeColor = Theme.colors

export function Routes() {
  return (
    <Navigator
      sceneContainerStyle={{
        backgroundColor: Theme.colors.backgroundIce,
      }}
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
        name="Bookings"
        component={BookingsScreen}
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
      <Screen
        name="Services"
        component={ServicesScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons
                name="notifications-none"
                size={size}
                color={color}
              />
            )
          },
          tabBarBadge: '',
          tabBarBadgeStyle: {
            borderColor: `${Theme.colors.background}`,
            borderWidth: 2,
            backgroundColor: `${Theme.colors.primary.background}`,
            width: 12,
          },
        }}
      />
      <Screen
        name="Book"
        component={BookScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="message-text-outline"
                size={size}
                color={color}
              />
            )
          },
        }}
      />
    </Navigator>
  )
}
