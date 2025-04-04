import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockPortraitW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockPortraitW100'

      short_name='ScreenLockPortrait'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M408-338q-15 0-25.5-10.5T372-374v-104q0-15 10.5-25.5T408-514h5v-40q0-29 19.5-48.5T481-622q29 0 48.5 19.5T549-554v40h5q14 0 24 10.5t10 25.5v104q0 15-10.5 25.5T552-338H408Zm33-176h80v-40q0-17-11.5-28.5T481-594q-17 0-28.5 11.5T441-554v40ZM312-92q-26 0-43-17t-17-43v-656q0-26 17-43t43-17h336q26 0 43 17t17 43v656q0 26-17 43t-43 17H312Zm-32-94v34q0 12 10 22t22 10h336q12 0 22-10t10-22v-34H280Zm0-28h400v-532H280v532Zm0-560h400v-34q0-12-10-22t-22-10H312q-12 0-22 10t-10 22v34Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialScreenLockPortraitW100.displayName = 'OnesyIconMaterialScreenLockPortraitW100';

export default IconMaterialScreenLockPortraitW100;
