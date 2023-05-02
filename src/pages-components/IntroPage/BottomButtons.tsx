import Button from '@mui/material/Button';
import type { Variants } from 'framer-motion';

import { AnimationItem } from '../../components';

import GitHubIcon from '@mui/icons-material/GitHub';
import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { AppUrl } from '../../common';

export const BottomButtons = () => {
  const navigate = useNavigate();

  return (
    <BottomButtonWrapper>
      <AnimationItem variants={item}>
        <Button variant="contained" onClick={() => navigate(AppUrl.Main)}>
          구경하기
        </Button>
      </AnimationItem>

      <AnimationItem variants={item}>
        <Button
          variant="contained"
          onClick={() =>
            (window.location.href =
              'https://github.com/juicyaloe/juicyaloe-main')
          }
          startIcon={<GitHubIcon />}
        >
          Github
        </Button>
      </AnimationItem>
    </BottomButtonWrapper>
  );
};

const BottomButtonWrapper = styled.div`
  position: absolute;
  bottom: 35px;
  right: 0;
  left: 0;

  display: flex;
  justify-content: space-evenly;
`;

const item: Variants = {
  init: { opacity: 0, scale: 0.5, y: 100 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: 'spring',
    },
  },
};
