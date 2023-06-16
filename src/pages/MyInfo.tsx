import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import LinkIcon from '@mui/icons-material/Link';

import styled from '@emotion/styled';

import { Header } from '../components';

export default function MyInfo() {
  return (
    <>
      <Header />

      <Typography
        variant="subtitle1"
        component="div"
        color="text.primary"
        sx={{ mx: '12px', mt: '18px' }}
      >
        소개 페이지로 이동 중입니다.
      </Typography>

      <RowWrap>
        <Typography variant="subtitle1" component="div" color="text.primary">
          이동이 되지 않는다면, &nbsp;
        </Typography>

        <CustomIconButton
          onClick={() =>
            (window.location.href =
              'https://sudden-cut-61a.notion.site/2aba877f43f44e4788244e1fca0dec56?pvs=4')
          }
        >
          <LinkIcon />
        </CustomIconButton>

        <Typography variant="subtitle1" component="div" color="text.primary">
          을 눌려주세요.
        </Typography>
      </RowWrap>
    </>
  );
}

const RowWrap = styled.div`
  display: flex;
  align-items: center;

  margin: 0 12px;
`;

const CustomIconButton = styled(IconButton)`
  padding: 0;
  margin-right: 6px;
`;
