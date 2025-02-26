import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraW100'

      short_name='SwitchCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-536h176l74-80h196l74 80h176v536H132Zm28-28h640v-480H640l-74-80H394l-74 80H160v480Zm320-240Zm-84 126 20-20-90-90h308l-90 90 20 20 124-124-124-124-20 20 90 90H326l90-90-20-20-124 124 124 124Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraW100.displayName = 'OnesyIconMaterialSwitchCameraW100';

export default IconMaterialSwitchCameraW100;
