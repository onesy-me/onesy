import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockLandscapeW100Filled'

      short_name='ScreenLockLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M92-252v-456h776v456H92Zm122-28h532v-400H214v400Zm158-58v-176h41v-40q0-29 19.5-48.5T481-622q29 0 48.5 19.5T549-554v40h39v176H372Zm69-176h80v-40q0-17-11.5-28.5T481-594q-17 0-28.5 11.5T441-554v40Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscapeW100Filled.displayName = 'OnesyIconMaterialScreenLockLandscapeW100Filled';

export default IconMaterialScreenLockLandscapeW100Filled;
