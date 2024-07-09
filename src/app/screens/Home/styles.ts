import { styledThemeProps } from '@/types/theme'
import styled from 'styled-components/native'

export const Container = styled.View<styledThemeProps>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props: styledThemeProps) =>
    props.theme.colors.background};
`
