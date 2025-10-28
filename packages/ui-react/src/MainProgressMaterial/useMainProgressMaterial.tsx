import React from 'react';

import MainProgressMaterialContext from './Context';
import { IMainProgressMaterialValue } from './MainProgressMaterial';

export default function useMainProgress(): IMainProgressMaterialValue {
  const value = React.useContext<IMainProgressMaterialValue>(MainProgressMaterialContext);

  return value;
}
