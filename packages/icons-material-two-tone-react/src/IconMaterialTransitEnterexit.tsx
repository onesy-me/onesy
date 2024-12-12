import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransitEnterexit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TransitEnterexit'

      short_name='TransitEnterexit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M15.98 6L9 12.77V8H6v10h10v-3h-4.85L18 8.03z"/>
    </Icon>
  );
});

IconMaterialTransitEnterexit.displayName = 'OnesyIconMaterialTransitEnterexit';

export default IconMaterialTransitEnterexit;
