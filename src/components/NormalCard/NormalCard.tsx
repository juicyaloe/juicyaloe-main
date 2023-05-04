import styled from '@emotion/styled';
import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';
import { ReactNode } from 'react';
import { useMode } from '../../provider';
import { Color } from '../../styles';
import { ThemeMode } from '../../common';

type NormalCardProps = {
  onClick?: () => void;
  children: ReactNode;
};

export const NormalCard = ({ onClick, children }: NormalCardProps) => {
  const { mode } = useMode();

  return (
    <NormalCardWrapper mode={mode}>
      <CardActionArea onClick={onClick}>
        <RowWrap>{children}</RowWrap>
      </CardActionArea>
    </NormalCardWrapper>
  );
};

const NormalCardWrapper = styled(Card)<{ mode: ThemeMode }>`
  margin: 18px 12px;

  background-color: ${({ mode }) =>
    mode === 'light' ? Color['card-light'] : Color['card-dark']};
`;

const RowWrap = styled.div`
  display: flex;
  align-items: center;

  padding: 12px;
  gap: 9px;
`;
