import Button from '@mui/material/Button';
import type { Variants } from 'framer-motion';

import { AnimationItem } from '../../components';

import styled from '@emotion/styled';

export const BottomButtons = () => {
  return (
    <BottomButtonWrapper>
      <AnimationItem variants={item}>
        <Button variant="contained">구경하기</Button>
      </AnimationItem>

      <AnimationItem variants={item}>
        <Button variant="contained">Github</Button>
      </AnimationItem>
    </BottomButtonWrapper>
  );
};

const BottomButtonWrapper = styled.div`
  position: absolute;
  bottom: 35px;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-evenly;
`;

const item: Variants = {
  init: { opacity: 0, scale: 0.5, y: 100 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  },
};
