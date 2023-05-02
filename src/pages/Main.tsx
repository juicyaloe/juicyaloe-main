import React from 'react';
import Lottie from 'lottie-react';

import GressAnimation from '../components/lottie/grass.json';

import styled from '@emotion/styled';

export default function Main() {
  return (
    <>
      <FixedLottie animationData={GressAnimation} />
    </>
  );
}

const FixedLottie = styled(Lottie)`
  position: fixed;
  bottom: -5px;

  z-index: -1;
`;
