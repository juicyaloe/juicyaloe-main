import { Variants } from 'framer-motion';

import { FullAnimationContainer, Header } from '../components';
import { WritingForm } from '../pages-components/GuestBookFormPage';

export default function GuestBookForm() {
  return (
    <FullAnimationContainer variants={start}>
      <Header />

      <WritingForm />
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
