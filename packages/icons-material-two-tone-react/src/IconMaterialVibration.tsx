import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialVibration = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Vibration'

      short_name='Vibration'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 5h8v14H8z" opacity=".3"/><path d="M19 7h2v10h-2zm3 2h2v6h-2zM0 9h2v6H0zm16.5-6h-9C6.67 3 6 3.67 6 4.5v15c0 .83.67 1.5 1.5 1.5h9c.83 0 1.5-.67 1.5-1.5v-15c0-.83-.67-1.5-1.5-1.5zM16 19H8V5h8v14zM3 7h2v10H3z"/>
    </Icon>
  );
});

IconMaterialVibration.displayName = 'OnesyIconMaterialVibration';

export default IconMaterialVibration;
