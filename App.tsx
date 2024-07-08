import { ThemeWrapper } from '@/layout/theme-wrapper'
import { StackRoutes } from '@/routes'
import { NavigationContainer } from '@react-navigation/native'
import React from 'react'

export default function App() {
  return (
    <ThemeWrapper>
      <NavigationContainer>
        <StackRoutes />
      </NavigationContainer>
    </ThemeWrapper>
  )
}
