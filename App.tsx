import { BookingProvider } from '@/context/booking'
import RootLayout from '@/layout/root-layout'
import { Routes } from '@/routes'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

export default function App() {
  return (
    <BookingProvider>
      <RootLayout>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </RootLayout>
    </BookingProvider>
  )
}
