import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterial360 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='360'

      short_name='360'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.77V20l4-4-4-4v2.73c-3.15-.56-5-1.9-5-2.73 0-1.06 3.04-3 8-3s8 1.94 8 3c0 .73-1.46 1.89-4 2.53v2.05c3.53-.77 6-2.53 6-4.58 0-2.76-4.48-5-10-5S2 9.24 2 12c0 2.24 2.94 4.13 7 4.77z"/>
    </Icon>
  );
});

IconMaterial360.displayName = 'OnesyIconMaterial360';

export default IconMaterial360;
