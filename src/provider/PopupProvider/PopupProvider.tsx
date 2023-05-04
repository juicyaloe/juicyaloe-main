import styled from '@emotion/styled';
import { AnimatePresence, Variants, motion } from 'framer-motion';
import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { Color } from '../../styles';
import { useMode } from '../MuiProvider';

const PopupContext = createContext<{
  open: (component: JSX.Element) => void;
  close: () => void;
} | null>(null);

export const PopupProvider = ({ children }: { children: ReactNode }) => {
  const { mode } = useMode();

  const [node, setNode] = useState<JSX.Element | null>(null);
  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout | null;

    if (isOpen) {
      timer = setTimeout(() => {
        setOpen(false);
      }, 3000);
    }

    return () => {
      timer && clearTimeout(timer);
    };
  }, [isOpen]);

  const open = useCallback((component: JSX.Element) => {
    setNode(component);
    setOpen(true);
  }, []);
  const close = useCallback(() => {
    setOpen(false);
  }, []);

  const context = useMemo(() => ({ open, close }), [open, close]);

  return (
    <PopupContext.Provider value={context}>
      {children}
      <AnimatePresence key="popup">
        {isOpen && (
          <PopupWrapper
            mode={mode}
            variants={item}
            initial="init"
            animate="show"
            exit="exit"
          >
            {node}
          </PopupWrapper>
        )}
      </AnimatePresence>
    </PopupContext.Provider>
  );
};

export const usePopup = () => {
  const context = useContext(PopupContext);

  if (!context) {
    throw new Error('usePopup must be used within a PopupProvider');
  }

  return context;
};

const item: Variants = {
  init: { opacity: 0, y: 200 },
  show: { opacity: 1, y: 0 },
  exit: { opacity: 0, scale: 0 },
};

const PopupWrapper = styled(motion.div)<{ mode: 'light' | 'dark' }>`
  position: absolute;

  bottom: 30px;
  left: 0;
  right: 0;

  margin: 0 20px;
  padding: 10px;

  border-radius: 10px;

  background: ${({ mode }) =>
    mode === 'light' ? Color['popup-light'] : Color['popup-dark']};
`;
