import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceBandW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceBandW100'

      short_name='DeviceBand'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M365-132v-482h-24v-66h24v-148h229v148h24v66h-24v482H365Zm28-501v473h173v-473H393Zm0-28h173v-139H393v139Zm0 28h173-173Zm0-28h173-173Z"/>
    </Icon>
  );
});

IconMaterialDeviceBandW100.displayName = 'OnesyIconMaterialDeviceBandW100';

export default IconMaterialDeviceBandW100;
