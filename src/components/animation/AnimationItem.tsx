import { ReactNode } from 'react';

import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

type AnimationItemProps = {
  variants: Variants;
  children?: ReactNode;
};

export const AnimationItem = ({ variants, children }: AnimationItemProps) => {
  return <motion.div variants={variants}>{children}</motion.div>;
};
