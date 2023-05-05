import { Variants } from 'framer-motion';

import Typography from '@mui/material/Typography';

import { FullAnimationContainer, Header } from '../components';

export default function Game() {
  return (
    <FullAnimationContainer variants={start}>
      <Header />

      <Typography
        variant="h6"
        component="div"
        color="text.primary"
        sx={{ mt: '18px', mx: '12px' }}
      >
        현재 준비중입니다.
      </Typography>

      <Typography
        variant="subtitle1"
        component="div"
        color="text.primary"
        sx={{ mx: '12px' }}
      >
        곧 출시될 예정이니, 기대해주세요!
      </Typography>
    </FullAnimationContainer>
  );
}

const start: Variants = {
  init: { x: -1000 },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};
