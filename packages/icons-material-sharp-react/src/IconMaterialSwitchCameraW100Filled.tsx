import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchCameraW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchCameraW100Filled'

      short_name='SwitchCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-536h176l74-80h196l74 80h176v536H132Zm264-142 20-20-90-90h308l-90 90 20 20 124-124-124-124-20 20 90 90H326l90-90-20-20-124 124 124 124Z"/>
    </Icon>
  );
});

IconMaterialSwitchCameraW100Filled.displayName = 'OnesyIconMaterialSwitchCameraW100Filled';

export default IconMaterialSwitchCameraW100Filled;
