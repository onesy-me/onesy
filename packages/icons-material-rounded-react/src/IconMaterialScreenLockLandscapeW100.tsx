import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockLandscapeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockLandscapeW100'

      short_name='ScreenLockLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M408-338q-15 0-25.5-10.5T372-374v-104q0-15 10.5-25.5T408-514h5v-40q0-29 19.5-48.5T481-622q29 0 48.5 19.5T549-554v40h5q14 0 24 10.5t10 25.5v104q0 15-10.5 25.5T552-338H408Zm33-176h80v-40q0-17-11.5-28.5T481-594q-17 0-28.5 11.5T441-554v40ZM152-252q-26 0-43-17t-17-43v-336q0-26 17-43t43-17h656q26 0 43 17t17 43v336q0 26-17 43t-43 17H152Zm34-28v-400h-34q-12 0-22 10t-10 22v336q0 12 10 22t22 10h34Zm28 0h532v-400H214v400Zm560 0h34q12 0 22-10t10-22v-336q0-12-10-22t-22-10h-34v400ZM186-680h-66 66Zm588 0h66-66Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscapeW100.displayName = 'OnesyIconMaterialScreenLockLandscapeW100';

export default IconMaterialScreenLockLandscapeW100;
