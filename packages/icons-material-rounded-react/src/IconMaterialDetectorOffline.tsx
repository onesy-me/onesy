import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDetectorOffline = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DetectorOffline'

      short_name='DetectorOffline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m480-224-76 76q-11 11-28 11t-28-11q-11-11-11-28t11-28l76-76-76-76q-11-11-11-28t11-28q11-11 28-11t28 11l76 76 76-76q11-11 28-11t28 11q11 11 11 28t-11 28l-76 76 76 76q11 11 11 28t-11 28q-11 11-28 11t-28-11l-76-76ZM200-760v40h560v-40H200Zm124 120 12 40h288l12-40H324Zm12 120q-26 0-47-15.5T260-576l-20-64h-40q-33 0-56.5-23.5T120-720v-40q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v40q0 33-23.5 56.5T760-640h-40l-26 68q-9 23-29 37.5T620-520H336ZM200-760v40-40Z"/>
    </Icon>
  );
});

IconMaterialDetectorOffline.displayName = 'OnesyIconMaterialDetectorOffline';

export default IconMaterialDetectorOffline;
