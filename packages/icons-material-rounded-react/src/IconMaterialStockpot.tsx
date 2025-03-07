import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialStockpot = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Stockpot'

      short_name='Stockpot'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-160q-50 0-85-35t-35-85v-320q0-17 11.5-28.5T160-640h640q17 0 28.5 11.5T840-600v320q0 50-35 85t-85 35H240Zm-40-400v280q0 17 11.5 28.5T240-240h480q17 0 28.5-11.5T760-280v-280H200Zm160-200v-40q0-17 11.5-28.5T400-840h160q17 0 28.5 11.5T600-800v40h200q17 0 28.5 11.5T840-720q0 17-11.5 28.5T800-680H160q-17 0-28.5-11.5T120-720q0-17 11.5-28.5T160-760h200Zm120 360Z"/>
    </Icon>
  );
});

IconMaterialStockpot.displayName = 'OnesyIconMaterialStockpot';

export default IconMaterialStockpot;
