import Typography from '@mui/material/Typography';

import styled from '@emotion/styled';

export const WritingFormText = () => {
  return (
    <WritingFormTextWrap>
      <Typography variant="h6" component="div" color="text.primary">
        GuestBook:
      </Typography>
      <Typography variant="subtitle2" component="div" color="text.secondary">
        저에게 남기고 싶은 말들을 기록해주세요!
      </Typography>
      <Typography variant="subtitle2" component="div" color="text.secondary">
        글을 작성 후 우측 하단 "전송" 버튼을 눌러주세요.
      </Typography>
    </WritingFormTextWrap>
  );
};

const WritingFormTextWrap = styled.div`
  user-select: none;
`;
