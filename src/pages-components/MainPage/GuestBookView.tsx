import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Card } from '@mui/material';
import styled from '@emotion/styled';
import { useQuery } from '@tanstack/react-query';
import { GuestBookType, Server } from '../../axios';

export const GuestBookView = () => {
  const { data, isError, isLoading } = useQuery(['guestbook'], () =>
    Server.get<GuestBookType[]>('/guestbook/public/')
  );

  console.log('data: ', data);

  return (
    <GuestBookViewContainer>
      <Typography
        variant="subtitle2"
        component="div"
        color="text.primary"
        sx={{ py: 1 }}
      >
        HMC NETWORKS.&nbsp;
        <Typography variant="subtitle2" component="span" color="text.secondary">
          (2022.12 ~ 2023.3)
        </Typography>
      </Typography>

      <Divider />

      <Typography variant="subtitle2" component="div" color="text.primary">
        HMC NETWORKS.&nbsp;
        <Typography variant="subtitle2" component="span" color="text.secondary">
          (2022.12 ~ 2023.3)
        </Typography>
      </Typography>

      <Divider />

      <Typography variant="subtitle2" component="div" color="text.primary">
        HMC NETWORKS.&nbsp;
        <Typography variant="subtitle2" component="span" color="text.secondary">
          (2022.12 ~ 2023.3)
        </Typography>
      </Typography>
    </GuestBookViewContainer>
  );
};

const GuestBookViewContainer = styled(Card)`
  margin: 0 12px;
  margin-top: 24px;

  padding: 9px;
`;
