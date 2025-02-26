import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDnsFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DnsFilled'

      short_name='Dns'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M300-600q25 0 42.5-17.5T360-660q0-25-17.5-42.5T300-720q-25 0-42.5 17.5T240-660q0 25 17.5 42.5T300-600Zm0 400q25 0 42.5-17.5T360-260q0-25-17.5-42.5T300-320q-25 0-42.5 17.5T240-260q0 25 17.5 42.5T300-200ZM120-480v-360h720v360H120Zm0 400v-360h720v360H120Z"/>
    </Icon>
  );
});

IconMaterialDnsFilled.displayName = 'OnesyIconMaterialDnsFilled';

export default IconMaterialDnsFilled;
