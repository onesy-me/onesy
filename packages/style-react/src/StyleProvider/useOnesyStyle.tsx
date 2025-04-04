import React from 'react';

import { IStyle } from './Style';
import StyleContext from './Context';

export default function useOnesyStyle(): IStyle {
  const value = React.useContext(StyleContext) as any;

  return value;
}
