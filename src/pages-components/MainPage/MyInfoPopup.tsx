import { useState, forwardRef, useImperativeHandle } from 'react';
import { AnimatePresence, motion, Variants } from 'framer-motion';

import styled from '@emotion/styled';

import { MyInfoPopupText } from './MyInfoPopup.Text';
import { MyInfoPopupLink } from './MyInfoPopup.Link';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Color } from '../../styles';
import { useMode } from '../../provider';

export type MyInfoPopupRef = {
  open: () => void;
  close: () => void;
};

export const MyInfoPopup = forwardRef<MyInfoPopupRef>((_, ref) => {
  const [isOpen, setOpen] = useState(false);
  const { mode } = useMode();

  useImperativeHandle(
    ref,
    () => {
      return {
        open: () => setOpen(true),
        close: () => setOpen(false),
      };
    },
    []
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <MyInfoPopupWrapper
          mode={mode}
          variants={item}
          initial="init"
          animate="show"
          exit="exit"
        >
          <RowWrap style={{ alignItems: 'start' }}>
            <MyInfoPopupText />

            <IconButton onClick={() => setOpen(false)}>
              <CloseIcon />
            </IconButton>
          </RowWrap>

          <RowWrap style={{ alignItems: 'stretch' }}>
            <MyInfoPopupLink />

            <img src="/favicon-64x64.png" alt="Aloe" />
          </RowWrap>
        </MyInfoPopupWrapper>
      )}
    </AnimatePresence>
  );
});

const MyInfoPopupWrapper = styled(motion.div)<{ mode: 'light' | 'dark' }>`
  position: absolute;

  bottom: 20px;
  left: 0;
  right: 0;

  margin: 0 20px;
  padding: 10px;

  border-radius: 10px;

  background: ${({ mode }) =>
    mode === 'light' ? Color['popup-light'] : Color['popup-dark']};
`;

const RowWrap = styled.div`
  display: flex;
  justify-content: space-between;
`;

const item: Variants = {
  init: { opacity: 0, y: 300 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0 },
};
