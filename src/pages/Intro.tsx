import { useEffect } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import {
  BackGround,
  BottomButtons,
  IntroTextGroup,
  ModeChangeButton,
} from '../pages-components/IntroPage';
import { FullAnimationContainer, AnimationItem } from '../components';

import type { Variants } from 'framer-motion';
import { Server } from '../axios';

export default function Intro() {
  const queryClient = useQueryClient();

  useEffect(() => {
    queryClient.prefetchQuery(['guestbook'], () =>
      Server.get('/guestbook/public/')
    );
  }, [queryClient]);

  return (
    <FullAnimationContainer variants={start}>
      <BackGround />
      <ModeChangeButton />

      <AnimationItem variants={wrap}>
        <IntroTextGroup />
        <BottomButtons />
      </AnimationItem>
    </FullAnimationContainer>
  );
}

const start: Variants = {
  init: { x: -1000 },
  show: {
    x: 0,
    transition: {
      duration: 0.5,
      delayChildren: 0.8,
    },
  },
};

const wrap: Variants = {
  init: { opacity: 1 },
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};
