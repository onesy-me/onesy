import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRiceBowl = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RiceBowl'

      short_name='RiceBowl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-80q-17 0-28.5-11.5T320-120v-30q-105-42-172.5-130T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 112-67.5 200T640-150v30q0 17-11.5 28.5T600-80H360Zm40-400h160v-310q-20-5-40-7.5t-40-2.5q-20 0-40 2.5t-40 7.5v310Zm-240 0h160v-277q-75 43-117.5 117T160-480Zm480 0h160q0-86-42.5-160T640-757v277ZM400-160h160v-44q72-29 133-76.5T784-400H176q30 72 91 119.5T400-204v44Zm0 0h160-160Z"/>
    </Icon>
  );
});

IconMaterialRiceBowl.displayName = 'OnesyIconMaterialRiceBowl';

export default IconMaterialRiceBowl;
