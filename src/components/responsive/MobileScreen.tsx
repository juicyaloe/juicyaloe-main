import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { useMode } from '../../provider';
import { Color } from '../../styles';

export const MobileScreen = ({ children }: { children: ReactNode }) => {
  const { mode } = useMode();

  return <MobileScreenWrapper mode={mode}>{children}</MobileScreenWrapper>;
};

export const MobileWidth = 500;

const MobileScreenWrapper = styled.div<{ mode: 'light' | 'dark' }>`
  position: relative;
  overflow: hidden;
  height: 100vh;

  max-width: ${MobileWidth}px;
  margin: 0 auto;

  background-color: ${({ mode }) =>
    mode === 'light' ? Color['white'] : Color['dark-main']};
`;
