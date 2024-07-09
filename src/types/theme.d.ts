import Theme from '@/styles/Theme'
import 'styled-components'

type AppThemeProps = typeof Theme

export type styledThemeProps = {
  theme: AppThemeProps
}
declare module 'styled-components' {
  interface DefaultTheme extends AppThemeProps {}
}
