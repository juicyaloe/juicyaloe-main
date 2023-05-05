import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';

import moment from 'moment';
import 'moment/locale/ko';

import { GuestBookType } from '../../axios';

type GuestBookItemProps = {
  item: GuestBookType;
};

export const GuestBookItem = ({ item }: GuestBookItemProps) => {
  return (
    <GuestBookItemWrapper>
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
          {item.content.length > 30
            ? item.content.slice(0, 30) + '...'
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

const GuestBookItemWrapper = styled(Card)`
  padding: 6px;
  margin: 3px 0;

  display: flex;
  gap: 6px;

  // hard coding
  height: 65px;
`;

const Box = styled.div``;
