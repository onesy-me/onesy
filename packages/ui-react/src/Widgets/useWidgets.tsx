import React from 'react';

import WidgetsContext from './Context';
import { IWidgetsValue } from './Widgets';

export default function useWidgets(): IWidgetsValue {
  const value = React.use<IWidgetsValue>(WidgetsContext);

  return value;
}
