import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocalGasStation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocalGasStation'

      short_name='LocalGasStation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120v-720h400v360h120v300h80v-328q-9 5-19 6.5t-21 1.5q-42 0-71-29t-29-71q0-32 17.5-57.5T684-694l-84-84 42-42 148 144q15 15 22.5 35t7.5 41v480H620v-300h-60v300H160Zm80-440h240v-200H240v200Zm480 0q17 0 28.5-11.5T760-600q0-17-11.5-28.5T720-640q-17 0-28.5 11.5T680-600q0 17 11.5 28.5T720-560ZM240-200h240v-280H240v280Zm240 0H240h240Z"/>
    </Icon>
  );
});

IconMaterialLocalGasStation.displayName = 'OnesyIconMaterialLocalGasStation';

export default IconMaterialLocalGasStation;
