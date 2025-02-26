import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddHome = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddHome'

      short_name='AddHome'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700-200h40v-100h100v-40H740v-100h-40v100H600v40h100v100Zm20 80q-83 0-141.5-58.5T520-320q0-83 58.5-141.5T720-520q83 0 141.5 58.5T920-320q0 83-58.5 141.5T720-120Zm-560-80v-480l320-240 320 240v92q-19-6-39-9t-41-3v-40L480-820 240-640v360h203q3 21 9 41t15 39H160Zm320-350Z"/>
    </Icon>
  );
});

IconMaterialAddHome.displayName = 'OnesyIconMaterialAddHome';

export default IconMaterialAddHome;
