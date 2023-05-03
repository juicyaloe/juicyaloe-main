import { createTheme, ThemeProvider } from '@mui/material';
import {
  ReactNode,
  createContext,
  useCallback,
  useMemo,
  useState,
} from 'react';

const MuiContext = createContext<{
  changeMode: () => void;
  mode: 'light' | 'dark';
} | null>(null);

export const MuiProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const changeMode = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  const theme = useMemo(
    () =>
      createTheme({
        typography: {
          fontFamily: "'Noto Sans KR', sans-serif",
        },
        palette: {
          mode,
        },
      }),
    [mode]
  );

  const context = useMemo(() => ({ changeMode, mode }), [changeMode, mode]);

  return (
    <MuiContext.Provider value={context}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiContext.Provider>
  );
};
