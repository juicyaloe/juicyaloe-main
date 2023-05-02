import {
  BackGround,
  BottomButtons,
  MainTextGroup,
} from '../pages-components/MainPage';
import { FullAnimationContainer, AnimationItem } from '../components';

import type { Variants } from 'framer-motion';

export default function Main() {
  return (
    <FullAnimationContainer variants={start}>
      <BackGround />

      <AnimationItem variants={wrap}>
        <MainTextGroup />
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
