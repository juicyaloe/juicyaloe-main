import { ReactNode } from 'react';

export const Optional = ({
  condition,
  children,
}: {
  condition: boolean;
  children: ReactNode;
}) => {
  return <>{condition ? children : null}</>;
};
