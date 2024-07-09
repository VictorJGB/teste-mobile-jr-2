import Theme from '@/styles/Theme'
import { ReactNode } from 'react'

import { ThemeProvider } from 'styled-components/native'

type ThemeProps = {
  children: ReactNode
}

export function ThemeWrapper({ children }: ThemeProps) {
  return <ThemeProvider theme={Theme}>{children}</ThemeProvider>
}
