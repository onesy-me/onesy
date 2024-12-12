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
      <path d="M440-280h80v-80h-80v80Zm0-160h80v-200h-80v200ZM800-80H160v-560l240-240h400v800Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlertFilled.displayName = 'OnesyIconMaterialSdCardAlertFilled';

export default IconMaterialSdCardAlertFilled;
