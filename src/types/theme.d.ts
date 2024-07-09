import Theme from '@/styles/Theme'
import 'styled-components'
import { AppThemeProps } from './theme.d'

type AppThemeProps = typeof Theme

export type styledThemeProps = {
  theme: AppThemeProps
}
declare module 'styled-components' {
  interface DefaultTheme extends AppThemeProps {}
}
