import React from 'react';

import { reset } from '@onesy/style-react';

import { IBaseElement } from '../types';

const useReset = reset();

export type IReset = IBaseElement & {

};

const Reset: React.FC<IReset> = (props) => {
  const { children, ...other } = props;

  useReset(other);

  return (
    <React.Fragment>
      {children}
    </React.Fragment>
  );
};

Reset.displayName = 'onesy-Reset';

export default Reset;
