import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNightSightMaxW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NightSightMaxW100Filled'

      short_name='NightSightMax'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M706-546v-120H586v-28h120v-120h28v120h120v28H734v120h-28ZM440-146q-123.11 0-208.56-85.44Q146-316.89 146-440q0-112 74.5-196.5T409-732q-17 26-26 62t-9 70q0 110 78 188t188 78q20 0 39.5-3t38.5-9q-29 88-104.5 144T440-146Z"/>
    </Icon>
  );
});

IconMaterialNightSightMaxW100Filled.displayName = 'OnesyIconMaterialNightSightMaxW100Filled';

export default IconMaterialNightSightMaxW100Filled;
