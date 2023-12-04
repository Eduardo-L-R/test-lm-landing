import { PaletteColorOptions } from '@mui/material';

declare module '@mui/material/styles' {
  interface CustomPalette {
    day: PaletteColorOptions;
    aqua: PaletteColorOptions;
    fire: PaletteColorOptions;
    plant: PaletteColorOptions;
  }
  interface Palette extends CustomPalette {}
  interface PaletteOptions extends CustomPalette {}
}

declare module '@mui/material/Button' {
  interface ButtonPropsColorOverrides {
    day: true;
    aqua: true;
    fire: true;
    plant: true;
  }
}
