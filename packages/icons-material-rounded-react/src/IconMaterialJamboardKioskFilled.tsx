import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialJamboardKioskFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='JamboardKioskFilled'

      short_name='JamboardKiosk'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-120q-17 0-28.5-11.5T240-160q0-17 11.5-28.5T280-200h160v-120H160q-33 0-56.5-23.5T80-400v-360q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v360q0 33-23.5 56.5T800-320H520v120h160q17 0 28.5 11.5T720-160q0 17-11.5 28.5T680-120H280ZM160-400h640v-360H160v360Z"/>
    </Icon>
  );
});

IconMaterialJamboardKioskFilled.displayName = 'OnesyIconMaterialJamboardKioskFilled';

export default IconMaterialJamboardKioskFilled;
