import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdCardAlertFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlertFilled'

      short_name='SdCardAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-80q-33 0-56.5-23.5T160-160v-447q0-16 6-30.5t17-25.5l194-194q11-11 25.5-17t30.5-6h287q33 0 56.5 23.5T800-800v640q0 33-23.5 56.5T720-80H240Zm240-200q17 0 28.5-11.5T520-320q0-17-11.5-28.5T480-360q-17 0-28.5 11.5T440-320q0 17 11.5 28.5T480-280Zm0-160q17 0 28.5-11.5T520-480v-120q0-17-11.5-28.5T480-640q-17 0-28.5 11.5T440-600v120q0 17 11.5 28.5T480-440Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertFilled.displayName = 'OnesyIconMaterialSdCardAlertFilled';

export default IconMaterialSdCardAlertFilled;
