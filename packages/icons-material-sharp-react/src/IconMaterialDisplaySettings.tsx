import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisplaySettings = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplaySettings'

      short_name='DisplaySettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-360h60v-160h-60v50h-60v60h60v50Zm100-50h320v-60H400v60Zm200-110h60v-50h60v-60h-60v-50h-60v160Zm-360-50h320v-60H240v60Zm80 450v-80H80v-640h800v640H640v80H320ZM160-280h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialDisplaySettings.displayName = 'OnesyIconMaterialDisplaySettings';

export default IconMaterialDisplaySettings;
