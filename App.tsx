import Book from '@/app/screens/Book'
import RootLayout from '@/layout/root-layout'
import Theme from '@/styles/Theme'
import React from 'react'
import { ThemeProvider } from 'styled-components/native'

export default function App() {
  return (
    <ThemeProvider theme={Theme}>
      <RootLayout>
        {/* <NavigationContainer>
          <Routes />
        </NavigationContainer> */}
        <Book />
      </RootLayout>
    </ThemeProvider>
  )
}
