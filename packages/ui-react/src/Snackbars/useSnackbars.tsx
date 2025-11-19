import React from 'react';

import SnackbarsContext from './Context';
import { ISnackbarsValue } from './Snackbars';

export default function useSnackbars(): ISnackbarsValue {
  const value = React.use<ISnackbarsValue>(SnackbarsContext);

  return value;
}
