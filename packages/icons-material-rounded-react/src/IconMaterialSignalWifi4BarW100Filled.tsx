import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifi4BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifi4BarW100Filled'

      short_name='SignalWifi4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M459-215 99-575q-5-5-7-10.5T90-597q0-7 3-13t9-11q85-63 178.5-95T480-748q106 0 199.5 32T858-621q6 5 9 11t3 13q0 6-2 11.5t-7 10.5L501-215q-5 5-10 7t-11 2q-6 0-11-2t-10-7Z"/>
    </Icon>
  );
});

IconMaterialSignalWifi4BarW100Filled.displayName = 'OnesyIconMaterialSignalWifi4BarW100Filled';

export default IconMaterialSignalWifi4BarW100Filled;
