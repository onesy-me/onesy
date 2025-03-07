import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialScreenLockLandscapeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ScreenLockLandscapeFilled'

      short_name='ScreenLockLandscape'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M394-320q-14 0-24-10t-10-24v-132q0-14 10-24t24-10h6v-40q0-33 23.5-56.5T480-640q33 0 56.5 23.5T560-560v40h6q14 0 24 10t10 24v132q0 14-10 24t-24 10H394Zm46-200h80v-40q0-17-11.5-28.5T480-600q-17 0-28.5 11.5T440-560v40ZM120-200q-33 0-56.5-23.5T40-280v-400q0-33 23.5-56.5T120-760h720q33 0 56.5 23.5T920-680v400q0 33-23.5 56.5T840-200H120Zm120-80h480v-400H240v400Z"/>
    </Icon>
  );
});

IconMaterialScreenLockLandscapeFilled.displayName = 'OnesyIconMaterialScreenLockLandscapeFilled';

export default IconMaterialScreenLockLandscapeFilled;
