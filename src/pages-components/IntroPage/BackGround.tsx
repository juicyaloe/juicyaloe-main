import Lottie from 'lottie-react';
import GressAnimation from '../../components/lottie/grass.json';

import styled from '@emotion/styled';

export const BackGround = () => {
  return <BackgroundLottie animationData={GressAnimation} />;
};

const BackgroundLottie = styled(Lottie)`
  position: absolute;
  bottom: -5px;

  width: 100%;

  border-radius: 15px 15px 0 0;
  overflow: hidden;

  z-index: -1;
`;
