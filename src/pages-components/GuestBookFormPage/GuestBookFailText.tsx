import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

export const GuestBookFailText = () => {
  return (
    <GuestBookFailTextWrapper>
      <Typography variant="subtitle1" component="div" color="text.primary">
        서버 오류로 방명록을 전송하지 못했습니다.
      </Typography>

      <Typography variant="subtitle2" component="div" color="text.primary">
        - 잠시 후에 시도해주시면 감사하겠습니다.
      </Typography>

      <Typography variant="subtitle2" component="div" color="text.primary">
        - 계속 같은 상태가 반복된다면, 관리자에게 문의해주세요.
      </Typography>
    </GuestBookFailTextWrapper>
  );
};

const GuestBookFailTextWrapper = styled.div``;
