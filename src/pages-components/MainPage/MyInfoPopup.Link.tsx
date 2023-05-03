import Typography from '@mui/material/Typography';

import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkIcon from '@mui/icons-material/Link';

import styled from '@emotion/styled';

export const MyInfoPopupLink = () => {
  return (
    <MyInfoPopupLinkWrap>
      <RowWrap>
        <CustomIconButton
          onClick={() =>
            (window.location.href = 'https://github.com/juicyaloe')
          }
        >
          <GitHubIcon />
        </CustomIconButton>

        <Typography
          variant="subtitle2"
          component="div"
          color="text.primary"
          sx={{ userSelect: 'none' }}
        >
          Juicyaloe Github
        </Typography>
      </RowWrap>

      <RowWrap>
        <CustomIconButton
          onClick={() => (window.location.href = 'https://velog.io/@juicyaloe')}
        >
          <LinkIcon />
        </CustomIconButton>

        <Typography
          variant="subtitle2"
          component="div"
          color="text.primary"
          sx={{ userSelect: 'none' }}
        >
          개발 블로그
        </Typography>
      </RowWrap>

      <RowWrap>
        <CustomIconButton
          onClick={() =>
            (window.location.href = 'https://blog.naver.com/juicyaloe')
          }
        >
          <LinkIcon />
        </CustomIconButton>

        <Typography
          variant="subtitle2"
          component="div"
          color="text.primary"
          sx={{ userSelect: 'none' }}
        >
          개인 블로그
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
