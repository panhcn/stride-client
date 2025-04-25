import { ReactNode } from 'react';
import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material';
import theme from './index';

interface ThemeProviderProps {
  children: ReactNode;
}

/**
 * Custom ThemeProvider component that wraps the application with MUI's ThemeProvider
 * and applies the CssBaseline for consistent styling across browsers.
 */
export function ThemeProvider({ children }: ThemeProviderProps) {
  return (
    <MuiThemeProvider theme={theme}>
      {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
}

export default ThemeProvider;
