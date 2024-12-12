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
      <path d="M372-338v-176h41v-40q0-29 19.5-48.5T481-622q29 0 48.5 19.5T549-554v40h39v176H372Zm69-176h80v-40q0-17-11.5-28.5T481-594q-17 0-28.5 11.5T441-554v40ZM252-92v-776h456v776H252Zm28-122h400v-532H280v532Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortraitW100Filled.displayName = 'OnesyIconMaterialScreenLockPortraitW100Filled';

export default IconMaterialScreenLockPortraitW100Filled;
