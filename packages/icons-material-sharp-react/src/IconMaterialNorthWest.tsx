import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNorthWest = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NorthWest'

      short_name='NorthWest'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M744-160 280-624v264h-80v-400h400v80H336l464 464-56 56Z"/>
    </Icon>
  );
});

IconMaterialNorthWest.displayName = 'OnesyIconMaterialNorthWest';

export default IconMaterialNorthWest;
