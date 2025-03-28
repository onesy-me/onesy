import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassFull = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassFull'

      short_name='HourglassFull'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 7.5l4 4 4-4V4H8zm0 9V20h8v-3.5l-4-4z" opacity=".3"/><path d="M18 2H6v6h.01L6 8.01 10 12l-4 4 .01.01H6V22h12v-5.99h-.01L18 16l-4-4 4-3.99-.01-.01H18V2zm-2 14.5V20H8v-3.5l4-4 4 4zm0-9l-4 4-4-4V4h8v3.5z"/>
    </Icon>
  );
});

IconMaterialHourglassFull.displayName = 'OnesyIconMaterialHourglassFull';

export default IconMaterialHourglassFull;
