import { ThemeProvider } from 'styled-components';

import theme from '@/styles/theme';
import { ReactNode } from 'react';

type ThemeProps = {
  children: ReactNode;
};

export function ThemeWrapper({ children }: ThemeProps) {
  return <ThemeProvider theme={theme.light}>{children}</ThemeProvider>;
}
