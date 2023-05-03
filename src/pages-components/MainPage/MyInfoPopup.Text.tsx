import styled from '@emotion/styled';
import Typography from '@mui/material/Typography';

export const MyInfoPopupText = () => {
  return (
    <MyInfoPopupTextWrap>
      <Typography variant="subtitle1" component="div" color="text.primary">
        🇰🇷{')'} KIM MIN-JAE, Frontend Devloper
      </Typography>
      <Typography variant="subtitle2" component="div" color="text.primary">
        - Seoul National University&nbsp;
        <Typography variant="subtitle2" component="span" color="text.secondary">
          (2021 ~)
        </Typography>
      </Typography>
      <Typography variant="subtitle2" component="div" color="text.primary">
        - HMC NETWORKS.&nbsp;
        <Typography variant="subtitle2" component="span" color="text.secondary">
          (2022.12 ~ 2023.3)
        </Typography>
      </Typography>
      <Typography variant="subtitle2" component="div" color="text.primary">
        - AIMED.&nbsp;
        <Typography variant="subtitle2" component="span" color="text.secondary">
          (2023.3 ~ current)
        </Typography>
      </Typography>
    </MyInfoPopupTextWrap>
  );
};

const MyInfoPopupTextWrap = styled.div``;
