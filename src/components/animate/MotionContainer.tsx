// material
import { Box } from '@mui/material';
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { VariantLabels } from 'framer-motion/types/motion/types';
import { Target } from 'framer-motion/types/types';
import { varWrapEnter } from './variants';

//

// ----------------------------------------------------------------------

interface MotionContainerProps {
  open: boolean;
  children?: ReactNode;
  initial?: boolean | Target | VariantLabels;
}

export default function MotionContainer({ open, children, ...other }: MotionContainerProps) {
  return (
    <Box
      component={motion.div}
      initial={false}
      animate={open ? 'animate' : 'exit'}
      variants={varWrapEnter}
      {...other}
    >
      {children}
    </Box>
  );
}
