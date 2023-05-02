import React from 'react';
import Lottie from 'lottie-react';

import GressAnimation from '../components/lottie/grass.json';

import styled from '@emotion/styled';

export default function Main() {
  return (
    <>
      <BackgroundLottie animationData={GressAnimation} />
    </>
  );
}

const BackgroundLottie = styled(Lottie)`
  position: absolute;
  bottom: -5px;

  z-index: -1;
`;
