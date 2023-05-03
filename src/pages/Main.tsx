import { Card } from '@mui/material';

import { FullAnimationContainer, Header } from '../components';
import { Variants } from 'framer-motion';
import { useRef, useState } from 'react';
import { MyInfoPopup, MyInfoPopupRef } from '../pages-components/MainPage';

export default function Main() {
  const MyInfoPopupRef = useRef<MyInfoPopupRef>(null);

  return (
    <FullAnimationContainer variants={start}>
      <Header />

      <Card onClick={() => MyInfoPopupRef.current?.open()}>나</Card>

      <MyInfoPopup ref={MyInfoPopupRef} />
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
