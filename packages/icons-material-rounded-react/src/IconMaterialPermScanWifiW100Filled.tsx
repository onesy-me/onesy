import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPermScanWifiW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PermScanWifiW100Filled'

      short_name='PermScanWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M459-215 99-575q-5-5-7-10.67-2-5.66-2-11.33 0-6.8 3-13t9-11q85-63 178.5-95T480-748q106 0 199.5 32T858-621q6 4.8 9 11t3 13q0 6-2 11.5t-7 10.5L501-215q-5 5-10 7t-11 2q-6 0-11-2t-10-7Zm7-159q0 5.95 4.04 9.98 4.03 4.02 10 4.02 5.96 0 9.96-4.02 4-4.03 4-9.98v-172q0-5.95-4.04-9.97-4.03-4.03-10-4.03-5.96 0-9.96 4.03-4 4.02-4 9.97v172Zm14-236q8.5 0 14.25-5.75T500-630q0-8.5-5.75-14.25T480-650q-8.5 0-14.25 5.75T460-630q0 8.5 5.75 14.25T480-610Z"/>
    </Icon>
  );
});

IconMaterialPermScanWifiW100Filled.displayName = 'OnesyIconMaterialPermScanWifiW100Filled';

export default IconMaterialPermScanWifiW100Filled;
