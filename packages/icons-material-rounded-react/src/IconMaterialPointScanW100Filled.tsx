import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPointScanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PointScanW100Filled'

      short_name='PointScan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-426q-23 0-38.5-15.5T426-480q0-23 15.5-38.5T480-534q23 0 38.5 15.5T534-480q0 23-15.5 38.5T480-426Zm-14-228v-120q0-5.95 4.04-9.97 4.03-4.03 10-4.03 5.96 0 9.96 4.03 4 4.02 4 9.97v120q0 5.95-4.04 9.97-4.03 4.03-10 4.03-5.96 0-9.96-4.03-4-4.02-4-9.97Zm0 468v-120q0-5.95 4.04-9.98 4.03-4.02 10-4.02 5.96 0 9.96 4.02 4 4.03 4 9.98v120q0 5.95-4.04 9.98-4.03 4.02-10 4.02-5.96 0-9.96-4.02-4-4.03-4-9.98Zm188-308h120q5.95 0 9.97 4.04 4.03 4.03 4.03 10 0 5.96-4.03 9.96-4.02 4-9.97 4H654q-5.95 0-9.97-4.04-4.03-4.03-4.03-10 0-5.96 4.03-9.96 4.02-4 9.97-4Zm-468 0h120q5.95 0 9.98 4.04 4.02 4.03 4.02 10 0 5.96-4.02 9.96-4.03 4-9.98 4H186q-5.95 0-9.98-4.04-4.02-4.03-4.02-10 0-5.96 4.02-9.96 4.03-4 9.98-4Z"/>
    </Icon>
  );
});

IconMaterialPointScanW100Filled.displayName = 'OnesyIconMaterialPointScanW100Filled';

export default IconMaterialPointScanW100Filled;
