import { CustomShadows } from '../theme/shadows';

interface Shape {
  borderRadius: string | number;
  borderRadiusSm: string | number;
  borderRadiusMd: string | number;
}

declare module '@mui/material/styles/createTheme' {
  interface ThemeOptions {
    customShadows?: CustomShadows;
    shape?: Shape;
  }

  interface Theme {
    customShadows: CustomShadows;
    shape: Shape;
  }
}
