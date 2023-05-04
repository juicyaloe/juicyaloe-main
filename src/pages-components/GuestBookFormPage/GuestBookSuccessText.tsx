import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

export const GuestBookSuccessText = () => {
  return (
    <GuestBookSuccessTextWrapper>
      <Typography variant="subtitle1" component="div" color="text.primary">
        방명록을 성공적으로 전송했습니다!
      </Typography>

      <Typography variant="subtitle2" component="div" color="text.primary">
        - 관리자의 검토 후, 메인 화면에 표시됩니다.
      </Typography>

      <Typography variant="subtitle2" component="div" color="text.primary">
        - 글 남겨주셔서 감사합니다. 좋은 하루 되세요!
      </Typography>
    </GuestBookSuccessTextWrapper>
  );
};

const GuestBookSuccessTextWrapper = styled.div``;
