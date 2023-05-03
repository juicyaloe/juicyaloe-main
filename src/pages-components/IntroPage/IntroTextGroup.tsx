import Typography from '@mui/material/Typography';

import type { Variants } from 'framer-motion';
import { AnimationItem } from '../../components';

import styled from '@emotion/styled';

export const IntroTextGroup = () => {
  return (
    <IntroTextGroupWrapper>
      <AnimationItem variants={item1}>
        <Typography
          variant="h6"
          component="div"
          color="text.primary"
          sx={{ textAlign: 'center' }}
        >
          마음 편히, 쉴 수 있는 공간
        </Typography>
        <Typography
          variant="h6"
          component="div"
          color="text.primary"
          sx={{ textAlign: 'center', fontWeight: '700' }}
        >
          JUICYALOE.COM
        </Typography>
      </AnimationItem>

      <AnimationItem variants={item2}>
        <Typography
          variant="subtitle1"
          component="div"
          color="text.primary"
          sx={{ textAlign: 'center', pt: '30px' }}
        >
          방문해 주셔서 감사합니다.
        </Typography>
        <Typography
          variant="subtitle1"
          component="div"
          color="text.primary"
          sx={{ textAlign: 'center' }}
        >
          천천히 구경 후, 방명록을 남겨주세요.
        </Typography>
      </AnimationItem>
    </IntroTextGroupWrapper>
  );
};

const IntroTextGroupWrapper = styled.div`
  padding-top: 70px;

  user-select: none;
`;

const item1: Variants = {
  init: { opacity: 0, y: -200, rotate: -180 },
  show: {
    opacity: 1,
    y: 0,
    rotate: 0,
    transition: {
      type: 'spring',
      damping: 5,
    },
  },
};

const item2: Variants = {
  init: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      duration: 1,
    },
  },
};
