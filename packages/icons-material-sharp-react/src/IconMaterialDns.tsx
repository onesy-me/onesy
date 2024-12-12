import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDns = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dns'

      short_name='Dns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720Zm0 400q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320ZM120-480v-360h720v360H120Zm80-280v200h560v-200H200ZM120-80v-360h720v360H120Zm80-280v200h560v-200H200Zm0-400v200-200Zm0 400v200-200Z"/>
    </Icon>
  );
});

IconMaterialDns.displayName = 'OnesyIconMaterialDns';

export default IconMaterialDns;
