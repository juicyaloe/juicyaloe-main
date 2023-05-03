import { useRef, useState } from 'react';
import { Variants } from 'framer-motion';

import { MyInfoPopup, MyInfoPopupRef } from '../pages-components/MainPage';

import { FullAnimationContainer, Header, NormalCard } from '../components';

import Typography from '@mui/material/Typography';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import BookIcon from '@mui/icons-material/Book';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';

export default function Main() {
  const MyInfoPopupRef = useRef<MyInfoPopupRef>(null);

  return (
    <FullAnimationContainer variants={start}>
      <Header />

      <NormalCard onClick={() => MyInfoPopupRef.current?.open()}>
        <AccountCircleIcon />

        <Typography variant="h6" component="div" color="text.primary">
          만든 사람
        </Typography>
      </NormalCard>

      <NormalCard>
        <BookIcon />

        <Typography variant="h6" component="div" color="text.primary">
          방명록 남기기
        </Typography>
      </NormalCard>

      <NormalCard>
        <SportsEsportsIcon />

        <Typography variant="h6" component="div" color="text.primary">
          게임 하러가기
        </Typography>
      </NormalCard>

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
