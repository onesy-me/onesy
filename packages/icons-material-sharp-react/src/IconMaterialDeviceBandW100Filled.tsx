import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceBandW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceBandW100Filled'

      short_name='DeviceBand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M365-132v-482h-24v-66h24v-148h229v148h24v66h-24v482H365Z"/>
    </Icon>
  );
});

IconMaterialDeviceBandW100Filled.displayName = 'OnesyIconMaterialDeviceBandW100Filled';

export default IconMaterialDeviceBandW100Filled;
