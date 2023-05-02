import { ReactNode } from 'react';
import styled from '@emotion/styled';

export const MobileScreen = ({ children }: { children: ReactNode }) => {
  return <MobileScreenWrapper>{children}</MobileScreenWrapper>;
};

const MobileScreenWrapper = styled.div`
  position: relative;
  overflow: hidden;
  height: 100vh;

  max-width: 500px;
  margin: 0 auto;
`;
