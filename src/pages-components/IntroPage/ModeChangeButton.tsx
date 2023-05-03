import IconButton from '@mui/material/IconButton';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import styled from '@emotion/styled';

import { useMode } from '../../provider';

export const ModeChangeButton = () => {
  const { mode, changeMode } = useMode();

  return (
    <ModeChangeButtonWrapper onClick={changeMode}>
      {mode === 'light' ? <LightModeIcon /> : <DarkModeIcon />}
    </ModeChangeButtonWrapper>
  );
};

const ModeChangeButtonWrapper = styled(IconButton)`
  position: absolute;

  top: 16px;
  right: 16px;
`;
