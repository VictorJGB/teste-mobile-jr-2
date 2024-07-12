import React from "react";

// screens
import BookScreen from "@/app/screens/Book";
import BookingsScreen from "@/app/screens/Bookings";
import HomeScreen from "@/app/screens/Home";

// Themes
import Theme from "@/styles/Theme";

// icons
import {
  Feather,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";

// Navigation
import RedirectScreen from "@/app/screens/Redirect";
import Service from "@/app/types/Service";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationProp } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export type Screens = ["Home", "Services", "Bookings", "Book", "Service"];
export type RootStackParamList = {
  Home: undefined;
  Service: undefined;
  Services: undefined;
  Bookings: undefined;
  Book: { data: Service };
};
export type StackNavigation = NavigationProp<RootStackParamList>;

const { Navigator: TabNavigator, Screen: TabScreen } =
  createBottomTabNavigator<RootStackParamList>();
const { Navigator: StackNavigator, Screen } =
  createNativeStackNavigator<RootStackParamList>();

const themeColor = Theme.colors;

function ScreenTabs() {
  return (
    <TabNavigator
      initialRouteName="Home"
      sceneContainerStyle={{
        backgroundColor: Theme.colors.backgroundIce,
      }}
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: themeColor.tabButton.selected.textColor,
        tabBarInactiveTintColor: themeColor.tabButton.unselected.textColor,
        tabBarIconStyle: {
          fontSize: 24,
        },
        tabBarShowLabel: false,
      }}
    >
      <TabScreen
        name="Home"
        component={HomeScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Feather name="home" size={size} color={color} />;
          },
        }}
      />
      <TabScreen
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
            );
          },
        }}
      />
      <TabScreen
        name="Services"
        component={RedirectScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialIcons
                name="notifications-none"
                size={size}
                color={color}
              />
            );
          },
          tabBarBadge: "",
          tabBarBadgeStyle: {
            borderColor: `${Theme.colors.background}`,
            borderWidth: 2,
            backgroundColor: `${Theme.colors.primary.background}`,
            width: 12,
          },
        }}
      />
      <TabScreen
        name="Service"
        component={RedirectScreen}
        options={{
          tabBarIcon: ({ color, size }) => {
            return (
              <MaterialCommunityIcons
                name="message-text-outline"
                size={size}
                color={color}
              />
            );
          },
        }}
      />
    </TabNavigator>
  );
}

export function Routes() {
  return (
    <StackNavigator initialRouteName="Home">
      <Screen
        name="Home"
        component={ScreenTabs}
        options={{
          headerShown: false,
        }}
      />
      <Screen
        name="Book"
        component={BookScreen}
        options={{
          headerShown: false,
        }}
      />
    </StackNavigator>
  );
}
