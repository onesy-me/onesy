import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialOilBarrelFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='OilBarrelFilled'

      short_name='OilBarrel'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-120q-17 0-28.5-11.5T120-160q0-17 11.5-28.5T160-200h40v-240h-40q-17 0-28.5-11.5T120-480q0-17 11.5-28.5T160-520h40v-240h-40q-17 0-28.5-11.5T120-800q0-17 11.5-28.5T160-840h640q17 0 28.5 11.5T840-800q0 17-11.5 28.5T800-760h-40v240h40q17 0 28.5 11.5T840-480q0 17-11.5 28.5T800-440h-40v240h40q17 0 28.5 11.5T840-160q0 17-11.5 28.5T800-120H160Zm320-200q50 0 85-34.5t35-83.5q0-20-4.5-34T577-505l-67-79q-12-14-30.5-14T449-584l-66 78q-14 19-18.5 33.5T360-438q0 49 35 83.5t85 34.5Z"/>
    </Icon>
  );
});

IconMaterialOilBarrelFilled.displayName = 'OnesyIconMaterialOilBarrelFilled';

export default IconMaterialOilBarrelFilled;
