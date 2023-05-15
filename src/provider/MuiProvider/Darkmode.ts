import type { PaletteOptions } from '@mui/material';
import { Color } from '../../styles';

export const Darkmode: PaletteOptions = {
  background: {
    default: Color['dark-main'],
    paper: Color['dark-main'],
  },
  primary: {
    main: Color['dark-primary'],
  },
  secondary: {
    main: Color['dark-secondary'],
  },
  info: {
    main: Color['dark-info'],
  },
};
