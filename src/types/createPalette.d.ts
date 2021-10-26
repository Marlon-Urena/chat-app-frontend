import { ChartColors } from '../theme/palette';

declare module '@mui/material/styles/createPalette' {
  interface TypeBackground {
    neutral: string;
  }

  interface SimplePaletteColorOptions {
    lighter?: string;
    darker?: string;
  }

  interface PaletteColor {
    lighter: string;
    darker: string;
  }

  interface Gradients {
    primary?: string;
    info?: string;
    success?: string;
    warning?: string;
    error?: string;
  }

  interface PaletteOptions {
    gradients?: Gradients;
    chart?: ChartColors;
  }

  interface Palette {
    gradients: Gradients;
    chart: ChartColors;
  }
}
