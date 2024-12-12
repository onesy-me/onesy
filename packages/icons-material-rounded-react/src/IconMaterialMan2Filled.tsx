import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan2Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2Filled'

      short_name='Man2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M420-120v-240h-60q-17 0-28.5-11.5T320-400v-200q0-33 23.5-56.5T400-680h160q33 0 56.5 23.5T640-600v200q0 17-11.5 28.5T600-360h-60v240q0 17-11.5 28.5T500-80h-40q-17 0-28.5-11.5T420-120Zm60-600q-33 0-56.5-23.5T400-800q0-33 23.5-56.5T480-880q33 0 56.5 23.5T560-800q0 33-23.5 56.5T480-720Z"/>
    </Icon>
  );
});

IconMaterialMan2Filled.displayName = 'OnesyIconMaterialMan2Filled';

export default IconMaterialMan2Filled;
