import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMobileLockLandscapeW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MobileLockLandscapeW100Filled'

      short_name='MobileLockLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M372-338h216v-176h-39v-40q0-29-19.5-48.5T481-622q-29 0-48.5 19.5T413-554v40h-41v176Zm69-176v-40q0-17 11.5-28.5T481-594q17 0 28.5 11.5T521-554v40h-80ZM92-252v-460h190v-36h134v36h452v460H92Z"/>
    </Icon>
  );
});

IconMaterialMobileLockLandscapeW100Filled.displayName = 'OnesyIconMaterialMobileLockLandscapeW100Filled';

export default IconMaterialMobileLockLandscapeW100Filled;
