import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import styled from '@emotion/styled';
import { AppUrl, OutUrl } from '../../common';
import { useNavigate } from 'react-router-dom';

export const MyInfoPopupLink = () => {
  const navigate = useNavigate();

  return (
    <MyInfoPopupLinkWrap>
      <RowWrap>
        <CustomIconButton
          onClick={() => (window.location.href = OutUrl.github)}
        >
          <GitHubIcon />
        </CustomIconButton>

        <Typography
          variant="subtitle2"
          component="div"
          color="text.primary"
          sx={{ userSelect: 'none' }}
        >
          GITHUB
        </Typography>
      </RowWrap>

      <RowWrap>
        <CustomIconButton onClick={() => navigate(AppUrl.MyInfo)}>
          <LinkIcon />
        </CustomIconButton>

        <Typography
          variant="subtitle2"
          component="div"
          color="text.primary"
          sx={{ userSelect: 'none' }}
        >
          자세한 정보
        </Typography>
      </RowWrap>
    </MyInfoPopupLinkWrap>
  );
};

const MyInfoPopupLinkWrap = styled.div`
  margin-top: 3px;
`;

const RowWrap = styled.div`
  display: flex;
  align-items: center;

  padding-top: 9px;
`;

const CustomIconButton = styled(IconButton)`
  padding: 0;
  margin-right: 6px;
`;
