import { ReactNode } from 'react';
import styled from '@emotion/styled';

import { useMode } from '../../provider';
import { Color } from '../../styles';
import { ThemeMode } from '../../common';

export const MobileScreen = ({ children }: { children: ReactNode }) => {
  const { mode } = useMode();

  return <MobileScreenWrapper mode={mode}>{children}</MobileScreenWrapper>;
};

const MobileScreenWrapper = styled.div<{ mode: ThemeMode }>`
  position: relative;

  max-width: 500px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }

  margin: 0 auto;

  background-color: ${({ mode }) =>
    mode === 'light' ? Color['white'] : Color['dark-main']};

  // test required
  overflow: hidden;
`;
