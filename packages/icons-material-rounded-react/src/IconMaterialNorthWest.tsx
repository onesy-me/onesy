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
      <path d="M280-624v224q0 17-11.5 28.5T240-360q-17 0-28.5-11.5T200-400v-320q0-17 11.5-28.5T240-760h320q17 0 28.5 11.5T600-720q0 17-11.5 28.5T560-680H336l436 436q11 11 11 28t-11 28q-11 11-28 11t-28-11L280-624Z"/>
    </Icon>
  );
});

IconMaterialNorthWest.displayName = 'OnesyIconMaterialNorthWest';

export default IconMaterialNorthWest;
