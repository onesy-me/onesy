import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScanDelete = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScanDelete'

      short_name='ScanDelete'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-800v200-200 640-9.5 9.5-640Zm0 720q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h287q16 0 30.5 6t25.5 17l194 194q11 11 17 25.5t6 30.5v111q0 17-11.5 28.5T760-456q-17 0-28.5-11.5T720-496v-104H600q-33 0-56.5-23.5T520-680v-120H240v640h248q17 0 28.5 11.5T528-120q0 17-11.5 28.5T488-80H240Zm480-103-56 55q-11 11-27.5 11.5T608-128q-11-11-11-28t11-28l56-56-56-56q-11-11-11-28t11-28q11-11 28-11t28 11l56 56 56-56q11-11 27.5-11.5T832-352q11 11 11 28t-11 28l-55 56 55 56q11 11 11.5 27.5T832-128q-11 11-28 11t-28-11l-56-55Z"/>
    </Icon>
  );
});

IconMaterialScanDelete.displayName = 'OnesyIconMaterialScanDelete';

export default IconMaterialScanDelete;
