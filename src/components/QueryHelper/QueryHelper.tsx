import React, { ReactNode } from 'react';

import { QueryLoading } from './QueryLoading';
import { QueryError } from './QueryError';
import { QueryMain } from './QueryMain';

interface QueryHelperProps {
  children: ReactNode;
  state: {
    isLoading: boolean;
    isError: boolean;
  };
}

export function QueryHelper({ children, state }: QueryHelperProps) {
  if (state.isLoading) {
    const filteredChildren = React.Children.toArray(children).filter(
      (node: any) =>
        !(node?.type?.name === 'QueryError' || node?.type?.name === 'QueryMain')
    );

    return <>{filteredChildren}</>;
  }

  if (state.isError) {
    const filteredChildren = React.Children.toArray(children).filter(
      (node: any) =>
        !(
          node?.type?.name === 'QueryLoading' ||
          node?.type?.name === 'QueryMain'
        )
    );

    return <>{filteredChildren}</>;
  }

  const mainChildren = React.Children.toArray(children).filter(
    (node: any) =>
      !(
        node?.type?.name === 'QueryLoading' || node?.type?.name === 'QueryError'
      )
  );

  return <>{mainChildren}</>;
}

QueryHelper.Loading = QueryLoading;
QueryHelper.Error = QueryError;
QueryHelper.Main = QueryMain;
