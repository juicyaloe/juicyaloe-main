import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';

import moment from 'moment';
import 'moment/locale/ko';

import { GuestBookType } from '../../axios';
import { useMode } from '../../provider';
import { ThemeMode } from '../../common';
import { Color } from '../../styles';

type GuestBookItemProps = {
  item: GuestBookType;
};

export const GuestBookItem = ({ item }: GuestBookItemProps) => {
  const { mode } = useMode();
  return (
    <GuestBookItemWrapper mode={mode}>
      <Avatar />

      <Box>
        <Typography
          variant="subtitle2"
          component="span"
          color="text.primary"
          sx={{ whiteSpace: 'nowrap' }}
        >
          {item.nickname}: &nbsp;
        </Typography>

        <Typography
          variant="subtitle2"
          component="span"
          color="text.secondary"
          sx={{ wordBreak: 'break-all' }}
        >
          {item.content.length > 80
            ? item.content.slice(0, 80) + '...'
            : item.content}
        </Typography>

        <Typography
          variant="subtitle2"
          component="span"
          color="text.secondary"
          sx={{ wordBreak: 'break-all' }}
        >
          &nbsp; - {moment(item.created_at).format('YY년 MM월 DD일')}
        </Typography>
      </Box>
    </GuestBookItemWrapper>
  );
};

const GuestBookItemWrapper = styled(Card)<{ mode: ThemeMode }>`
  padding: 6px;
  margin: 3px 0;

  display: flex;
  gap: 6px;

  // hard coding
  height: 90px;

  background-color: ${({ mode }) =>
    mode === 'light' ? Color['card-light'] : Color['card-dark']};
`;

const Box = styled.div``;
