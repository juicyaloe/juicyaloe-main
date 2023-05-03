import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import styled from '@emotion/styled';
import { useNavigate } from 'react-router-dom';
import { ChangeModeToggle } from '../ChangeModeToggle';

export const Header = () => {
  const navigate = useNavigate();

  return (
    <HeaderWrapper>
      <IconButton onClick={() => navigate(-1)} sx={{ ml: '4px' }}>
        <ArrowBackIcon />
      </IconButton>

      <Typography
        variant="subtitle1"
        color="text.primary"
        sx={{ fontWeight: '700' }}
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
