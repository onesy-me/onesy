import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDesktopMacFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DesktopMacFilled'

      short_name='DesktopMac'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-240H160q-33 0-56.5-23.5T80-320v-440q0-33 23.5-56.5T160-840h640q33 0 56.5 23.5T880-760v440q0 33-23.5 56.5T800-240H560l74 74q2 2 6 14v12q0 8-6 14t-14 6H334q-6 0-10-4t-4-10v-20q0-2 4-10l76-76Z"/>
    </Icon>
  );
});

IconMaterialDesktopMacFilled.displayName = 'OnesyIconMaterialDesktopMacFilled';

export default IconMaterialDesktopMacFilled;
