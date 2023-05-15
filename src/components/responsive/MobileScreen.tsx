import { ReactNode } from 'react';
import styled from '@emotion/styled';

export const MobileScreen = ({ children }: { children: ReactNode }) => {
  return <MobileScreenWrapper>{children}</MobileScreenWrapper>;
};

const MobileScreenWrapper = styled.div`
  position: relative;

  max-width: 500px;
  height: 100vh;
  @supports (-webkit-touch-callout: none) {
    height: -webkit-fill-available;
  }

  margin: 0 auto;
`;
