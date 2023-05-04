import type { PaletteOptions } from '@mui/material';
import { Color } from '../../styles';

export const Darkmode: PaletteOptions = {
  // 백그라운드 색상은 MobileScreen에서 처리
  background: {
    default: Color['white'],
    paper: Color['white'],
  },
  primary: {
    main: Color['dark-primary'],
  },
  secondary: {
    main: Color['dark-secondary'],
  },
};
