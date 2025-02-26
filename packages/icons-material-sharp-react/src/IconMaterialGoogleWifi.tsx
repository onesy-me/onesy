import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialGoogleWifi = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='GoogleWifi'

      short_name='GoogleWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M184-560h592l-11-160H195l-11 160Zm-5 80-13 200h628l-13-200H179Zm21 320-13-40H80l40-600h720l40 600H773l-13 40H200Z"/>
    </Icon>
  );
});

IconMaterialGoogleWifi.displayName = 'OnesyIconMaterialGoogleWifi';

export default IconMaterialGoogleWifi;
