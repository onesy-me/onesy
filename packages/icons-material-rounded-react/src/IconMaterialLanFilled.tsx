import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialLanFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='LanFilled'

      short_name='Lan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-160v-120q0-33 23.5-56.5T200-360h40v-80q0-33 23.5-56.5T320-520h120v-80h-40q-33 0-56.5-23.5T320-680v-120q0-33 23.5-56.5T400-880h160q33 0 56.5 23.5T640-800v120q0 33-23.5 56.5T560-600h-40v80h120q33 0 56.5 23.5T720-440v80h40q33 0 56.5 23.5T840-280v120q0 33-23.5 56.5T760-80H600q-33 0-56.5-23.5T520-160v-120q0-33 23.5-56.5T600-360h40v-80H320v80h40q33 0 56.5 23.5T440-280v120q0 33-23.5 56.5T360-80H200q-33 0-56.5-23.5T120-160Z"/>
    </Icon>
  );
});

IconMaterialLanFilled.displayName = 'OnesyIconMaterialLanFilled';

export default IconMaterialLanFilled;
