import { createTheme, ThemeProvider } from '@mui/material';
import { ReactNode, createContext, useContext, useMemo } from 'react';

import { LightMode } from './Lightmode';
import { Darkmode } from './Darkmode';
import { ThemeMode, useThemeMode } from '../../common';

const MuiContext = createContext<{
  changeMode: () => void;
  mode: ThemeMode;
} | null>(null);

export const MuiProvider = ({ children }: { children: ReactNode }) => {
  const { themeMode, changeThemeMode } = useThemeMode();

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "'Noto Sans KR', sans-serif",
        },
        palette: {
          mode: themeMode,
          ...(themeMode === 'light' ? LightMode : Darkmode),
        },
      }),
    [themeMode]
  );

  const context = useMemo(
    () => ({ changeMode: changeThemeMode, mode: themeMode }),
    [changeThemeMode, themeMode]
  );

  return (
    <MuiContext.Provider value={context}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiContext.Provider>
  );
};

export const useMode = () => {
  const context = useContext(MuiContext);

  if (!context) {
    throw new Error('useMode must be used within a MuiProvider');
  }

  return context;
};
