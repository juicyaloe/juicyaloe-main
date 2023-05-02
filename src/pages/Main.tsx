import {
  BackGround,
  BottomButtons,
  MainTextGroup,
} from '../pages-components/MainPage';
import { AnimationContainer } from '../components';

import type { Variants } from 'framer-motion';

export default function Main() {
  return (
    <>
      <BackGround />

      <AnimationContainer variants={wrap}>
        <MainTextGroup />
        <BottomButtons />
      </AnimationContainer>
    </>
  );
}

const wrap: Variants = {
  init: { opacity: 1 },
  show: {
    transition: {
      delayChildren: 0.2,
      staggerChildren: 0.4,
    },
  },
};
