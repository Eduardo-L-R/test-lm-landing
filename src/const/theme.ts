import { createTheme } from '@mui/material';

const { palette } = createTheme();
const { augmentColor } = palette;
const createColor = (mainColor: any) => augmentColor({ color: { main: mainColor } });
export const theme = createTheme({
  palette: {
    day: createColor('#00d448'),
    aqua: createColor('#007abe'),
    fire: createColor('#f8393a'),
    plant: createColor('#00a957'),
  },
  components: {
    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
      styleOverrides: {
        root: {},
      },
    },
  },
});
