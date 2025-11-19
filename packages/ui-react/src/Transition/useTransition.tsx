import React from 'react';

import TransitionContext from './Context';

export default function useTransition() {
  const value = React.use(TransitionContext) as any;

  return value;
}
