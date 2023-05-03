import { FullAnimationContainer, Header } from '../components';
import type { Variants } from 'framer-motion';

export default function Main() {
  return (
    <FullAnimationContainer variants={start}>
      <Header />
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
