import {
  BackGround,
  BottomButtons,
  IntroTextGroup,
  ModeChangeButton,
} from '../pages-components/IntroPage';
import { FullAnimationContainer, AnimationItem } from '../components';

import type { Variants } from 'framer-motion';

export default function Intro() {
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
