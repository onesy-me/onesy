import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNavigation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Navigation'

      short_name='Navigation'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.72 17.7l3.47-1.53.81-.36.81.36 3.47 1.53L12 7.27z" opacity=".3"/><path d="M4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2 4.5 20.29zm8.31-4.12l-.81-.36-.81.36-3.47 1.53L12 7.27l4.28 10.43-3.47-1.53z"/>
    </Icon>
  );
});

IconMaterialNavigation.displayName = 'OnesyIconMaterialNavigation';

export default IconMaterialNavigation;
