import { useNavigate } from 'react-router-dom';

import { Variants } from 'framer-motion';

import { Server } from '../axios';
import { usePopup } from '../provider';

import { AppUrl } from '../common';
import { FullAnimationContainer, Header } from '../components';
import {
  WritingForm,
  FormField,
  GuestBookSuccessText,
  GuestBookFailText,
} from '../pages-components/GuestBookFormPage';

export default function GuestBookForm() {
  const { open } = usePopup();
  const navigate = useNavigate();

  const onData = (data: FormField) => {
    Server.post('/guestbook/', JSON.stringify(data))
      .then((res) => {
        open(<GuestBookSuccessText />);
        navigate(AppUrl.Main);
      })
      .catch((err) => {
        open(<GuestBookFailText />);
      });
  };

  return (
    <FullAnimationContainer variants={start}>
      <Header />

      <WritingForm onData={onData} />
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
