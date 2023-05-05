import { useQuery } from '@tanstack/react-query';
import Slider, { Settings } from 'react-slick';

import Typography from '@mui/material/Typography';
import styled from '@emotion/styled';

import { Server, GuestBookType } from '../../axios';
import { Optional } from '../../components';
import { GuestBookItem } from './GuestBookItem';

export const GuestBookView = () => {
  const { data, isLoading, isError } = useQuery(['guestbook'], () =>
    Server.get<GuestBookType[]>('/guestbook/public/')
  );

  const settings: Settings = {
    slidesToShow: 3,
    speed: 1000,

    infinite: true,
    vertical: true,
    verticalSwiping: true,
    swipeToSlide: true,

    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <GuestBookViewContainer>
      <Optional condition={isLoading}>
        <Typography variant="subtitle1" component="div" color="text.primary">
          방명록을 불러오는 중입니다..
        </Typography>
      </Optional>

      <Optional condition={isError}>
        <Typography variant="subtitle1" component="div" color="text.primary">
          일시적인 오류로 방명록을 불러오는데 실패했습니다.
        </Typography>
        <Typography variant="subtitle1" component="div" color="text.primary">
          잠시 후에 시도해주세요.
        </Typography>
      </Optional>

      <Optional condition={!isLoading && !isError}>
        <Typography
          variant="subtitle1"
          component="div"
          color="text.primary"
          sx={{ fontWeight: '700', userSelect: 'none' }}
        >
          남겨주신 글:
        </Typography>

        <StyledSlider {...settings}>
          {data?.data.map((guestbook) => (
            <GuestBookItem key={guestbook.id} item={guestbook} />
          ))}
        </StyledSlider>
      </Optional>
    </GuestBookViewContainer>
  );
};

const GuestBookViewContainer = styled.div`
  margin: 0 12px;
  margin-top: 24px;
`;

const StyledSlider = styled(Slider)`
  button {
    display: none !important;
  }

  .slick-list {
    width: 100%;
  }

  .slick-slide {
    cursor: pointer;
  }
`;
