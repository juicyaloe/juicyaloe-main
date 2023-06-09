import { ReactNode } from 'react';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type AnimationContainerProps = {
  variants: Variants;
  initial?: string;
  animate?: string;
  exit?: string;
  children?: ReactNode;
};

export const AnimationContainer = ({
  variants,
  initial = 'init',
  animate = 'show',
  exit = 'exit',
  children,
}: AnimationContainerProps) => {
  return (
    <motion.div
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      {children}
    </motion.div>
  );
};
