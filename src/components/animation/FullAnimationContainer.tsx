import { ReactNode } from 'react';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

import styled from '@emotion/styled';

type FullAnimationContainerProps = {
  variants: Variants;
  initial?: string;
  animate?: string;
  exit?: string;
  children?: ReactNode;
};

export const FullAnimationContainer = ({
  variants,
  initial = 'init',
  animate = 'show',
  exit = 'exit',
  children,
}: FullAnimationContainerProps) => {
  return (
    <FullAnimationView
      variants={variants}
      initial={initial}
      animate={animate}
      exit={exit}
    >
      {children}
    </FullAnimationView>
  );
};

const FullAnimationView = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: relative;
`;
