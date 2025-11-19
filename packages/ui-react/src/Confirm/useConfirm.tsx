import React from 'react';

import ConfirmContext from './Context';
import { IConfirmValue } from './Confirm';

export default function useConfirm(): IConfirmValue {
  const value = React.use<IConfirmValue>(ConfirmContext);

  return value;
}
