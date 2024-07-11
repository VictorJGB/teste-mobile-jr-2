import RootLayout from '@/layout/root-layout'
import { Routes } from '@/routes'

import Theme from '@/styles/Theme'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RootLayout>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </RootLayout>
    </ThemeProvider>
  )
}
