import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLocationHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LocationHomeFilled'

      short_name='LocationHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 40q-58 0-112.5 16.5T264-256q-12 7-18 19t-6 26v11h480v-11q0-14-6-26t-18-19q-49-31-103.5-47.5T480-320ZM240-120q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240Z"/>
    </Icon>
  );
});

IconMaterialLocationHomeFilled.displayName = 'OnesyIconMaterialLocationHomeFilled';

export default IconMaterialLocationHomeFilled;
