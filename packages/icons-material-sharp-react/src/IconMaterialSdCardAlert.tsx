import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSdCardAlert = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SdCardAlert'

      short_name='SdCardAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-280h80v-80h-80v80Zm0-160h80v-200h-80v200ZM800-80H160v-560l240-240h400v800Zm-80-80v-640H434L240-606v446h480Zm0 0v-640 640Z"/>
    </Icon>
  );
});

IconMaterialSdCardAlert.displayName = 'OnesyIconMaterialSdCardAlert';

export default IconMaterialSdCardAlert;
