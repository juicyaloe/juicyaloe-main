import { useEffect } from 'react';
import { motion, useSpring } from 'framer-motion';

import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from '@emotion/styled';

import { useMode } from '../../provider';
import { Color } from '../../styles';

export const ChangeModeToggle = () => {
  const { mode, changeMode } = useMode();

  const x = useSpring(0, {
    stiffness: 700,
    damping: 30,
  });

  useEffect(() => {
    x.set(mode === 'dark' ? 35 : 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mode]);

  return (
    <Toggle onClick={changeMode} mode={mode}>
      <Ball style={{ x }}>
        {mode === 'light' ? (
          <LightModeIcon sx={{ color: Color['orange'] }} fontSize="small" />
        ) : (
          <DarkModeIcon sx={{ color: Color['dark-main'] }} fontSize="small" />
        )}
      </Ball>
    </Toggle>
  );
};

const Toggle = styled.div<{ mode: 'light' | 'dark' }>`
  width: 70px;
  height: 35px;
  border-radius: 17.5px;
  padding: 5px;

  background-color: ${({ mode }) =>
    mode === 'light' ? Color['toggle-light'] : Color['toggle-dark']};

  display: flex;

  cursor: pointer;

  // hard-coding
  margin-right: 6px;
`;

const Ball = styled(motion.div)`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 25px;
  height: 25px;
  border-radius: 12.5px;

  background-color: white;
`;
