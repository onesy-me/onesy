import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPhotoCameraW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PhotoCameraW100'

      short_name='PhotoCamera'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-300q59 0 99.5-40.5T620-440q0-59-40.5-99.5T480-580q-59 0-99.5 40.5T340-440q0 59 40.5 99.5T480-300Zm0-28q-48 0-80-32t-32-80q0-48 32-80t80-32q48 0 80 32t32 80q0 48-32 80t-80 32ZM132-172v-536h176l74-80h196l74 80h176v536H132Zm28-28h640v-480H640l-74-80H394l-74 80H160v480Zm320-240Z"/>
    </Icon>
  );
});

IconMaterialPhotoCameraW100.displayName = 'OnesyIconMaterialPhotoCameraW100';

export default IconMaterialPhotoCameraW100;
