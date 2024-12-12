import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHomeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHomeFilled'

      short_name='AddHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-200h40v-100h100v-40H740v-100h-40v100H600v40h100v100Zm20 80q-83 0-141.5-58.5T520-320q0-83 58.5-141.5T720-520q83 0 141.5 58.5T920-320q0 83-58.5 141.5T720-120Zm-560-80v-480l320-240 320 240v92q-20-6-40-9t-40-3q-117 0-198.5 81.5T440-320q0 32 6.5 62t20.5 58H160Z"/>
    </Icon>
  );
});

IconMaterialAddHomeFilled.displayName = 'OnesyIconMaterialAddHomeFilled';

export default IconMaterialAddHomeFilled;
