import { useState, useEffect, useCallback } from 'react';
import { ThemeMode } from './types';
import { useLocalStorage } from '../localStorage';
import { theme_mode_key } from './theme.key';

export const useThemeMode = () => {
  const { getItem, setItem } = useLocalStorage(theme_mode_key);

  const [themeMode, setThemeMode] = useState<ThemeMode>(
    () => (getItem() as ThemeMode | null) || 'light'
  );

  console.log('themeMode: ', themeMode);

  // localstorage init
  useEffect(() => {
    const initThemeMode = getItem() as ThemeMode | null;

    if (!initThemeMode) {
      setItem('light');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // localstorage sync
  useEffect(() => {
    if (!themeMode) {
      setItem(themeMode);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeMode]);

  const changeThemeMode = useCallback(() => {
    setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  return { themeMode, changeThemeMode };
};
