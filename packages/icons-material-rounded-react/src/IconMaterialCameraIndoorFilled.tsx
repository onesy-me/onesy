import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCameraIndoorFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CameraIndoorFilled'

      short_name='CameraIndoor'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M240-120q-33 0-56.5-23.5T160-200v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H240Zm120-160h160q17 0 28.5-11.5T560-320v-40l51 27q10 5 19.5-1t9.5-17v-98q0-11-9.5-17t-19.5-1l-51 27v-40q0-17-11.5-28.5T520-520H360q-17 0-28.5 11.5T320-480v160q0 17 11.5 28.5T360-280Z"/>
    </Icon>
  );
});

IconMaterialCameraIndoorFilled.displayName = 'OnesyIconMaterialCameraIndoorFilled';

export default IconMaterialCameraIndoorFilled;
