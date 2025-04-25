# Theme Directory

## Purpose
This directory contains the Material-UI (MUI) theme configuration for the Stride client application. It defines the global styling, color palette, typography, and component overrides used throughout the application.

## Contents
- `index.ts` - Main theme configuration file that defines colors, typography, and component styles
- `ThemeProvider.tsx` - React component that wraps the application with the MUI ThemeProvider

## Theme Customization
The theme is built using MUI's `createTheme` function and follows the MUI theming system. The main customization points include:

1. **Color Palette**
   - Primary color: #1976d2 (blue)
   - Secondary color: #9c27b0 (purple)
   - Error, warning, info, and success colors
   - Background colors

2. **Typography**
   - Font family: Roboto (loaded via @fontsource/roboto)
   - Heading sizes and weights
   - Button text styling (no uppercase transformation)

3. **Component Overrides**
   - Button styling
   - Paper component styling
   - Other component-specific customizations

## Usage
The theme is automatically applied to the entire application through the `ThemeProvider` component in `main.tsx`. To use the theme in your components:

```tsx
// To access theme in styled components
import { styled } from '@mui/material/styles';

const StyledComponent = styled('div')(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.primary.light,
}));

// To access theme in a component
import { useTheme } from '@mui/material/styles';

function MyComponent() {
  const theme = useTheme();
  return <div style={{ color: theme.palette.primary.main }}>Themed Component</div>;
}
```

## Guidelines for Changes
1. Keep the theme consistent with the Stride brand guidelines
2. Document any significant changes to the theme
3. Test theme changes across different components to ensure consistency
4. Consider dark mode implications when changing colors
5. Use the theme's spacing, breakpoints, and palette values instead of hard-coded values

## Dependencies
- @mui/material
- @mui/system
- @emotion/react
- @emotion/styled
- @fontsource/roboto
