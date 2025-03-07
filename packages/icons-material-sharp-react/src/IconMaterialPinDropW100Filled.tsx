import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPinDropW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PinDropW100Filled'

      short_name='PinDrop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-232q-128-97-191-187t-63-175.01q0-64.22 23-112.6Q272-755 308.33-788t81.75-49.5Q435.49-854 480-854q44.51 0 89.92 16.5 45.42 16.5 81.75 49.5T711-706.61q23 48.38 23 112.6Q734-509 671-419q-63 90-191 187Zm0-314q23 0 38.5-15.5T534-600q0-23-15.5-38.5T480-654q-23 0-38.5 15.5T426-600q0 23 15.5 38.5T480-546ZM226-106v-28h508v28H226Z"/>
    </Icon>
  );
});

IconMaterialPinDropW100Filled.displayName = 'OnesyIconMaterialPinDropW100Filled';

export default IconMaterialPinDropW100Filled;
