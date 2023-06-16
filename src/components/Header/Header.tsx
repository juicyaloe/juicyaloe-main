import { useLocation, useNavigate } from 'react-router-dom';

import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styled from '@emotion/styled';

import { ChangeModeToggle } from '../ChangeModeToggle';
import { AppUrl } from '../../common';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onBack = () => {
    if (location.pathname === AppUrl.Main) {
      navigate(AppUrl.Intro);
      return;
    }

    if (location.pathname === AppUrl.MyInfo) {
      navigate(AppUrl.Main);
      return;
    }

    navigate(-1);
  };

  return (
    <HeaderWrapper>
      <IconButton onClick={onBack} sx={{ ml: '4px' }}>
        <ArrowBackIcon />
      </IconButton>

      <Typography
        variant="subtitle1"
        color="text.primary"
        sx={{ fontWeight: '700', userSelect: 'none' }}
      >
        JUICYALOE.COM
      </Typography>

      <ChangeModeToggle />
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.div`
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
`;
