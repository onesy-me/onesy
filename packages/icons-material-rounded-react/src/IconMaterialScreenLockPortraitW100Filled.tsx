import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockPortraitW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortraitW100Filled'

      short_name='ScreenLockPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M408-338q-14.82 0-25.41-10.59T372-374v-104q0-14.82 10.59-25.41T408-514h5v-40q0-29 19.5-48.5T481-622q29 0 48.5 19.5T549-554v40h5q14 0 24 10.59T588-478v104q0 14.82-10.59 25.41T552-338H408Zm33-176h80v-40q0-17-11.5-28.5T481-594q-17 0-28.5 11.5T441-554v40ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortraitW100Filled.displayName = 'OnesyIconMaterialScreenLockPortraitW100Filled';

export default IconMaterialScreenLockPortraitW100Filled;
