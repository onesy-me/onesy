import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNearbyOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NearbyOff'

      short_name='NearbyOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M21.41,13.42L18.83,16l-1.81-1.81L19.2,12L12,4.8L9.81,6.99L8,5.17l2.58-2.58c0.78-0.78,2.05-0.78,2.83,0l8,8 C22.2,11.37,22.2,12.63,21.41,13.42z M21.19,21.19l-1.41,1.41L16,18.83l-2.58,2.58c-0.78,0.78-2.05,0.78-2.83,0l-8-8 c-0.78-0.78-0.78-2.05,0-2.83L5.17,8L1.39,4.22L2.8,2.81L21.19,21.19z M14.19,17.02l-1.39-1.39l-0.8,0.8L7.58,12l0.8-0.8 l-1.4-1.39L4.8,12l7.2,7.2L14.19,17.02z M16.42,12L12,7.58l-0.8,0.8l4.42,4.42L16.42,12z"/></g></g>
    </Icon>
  );
});

IconMaterialNearbyOff.displayName = 'OnesyIconMaterialNearbyOff';

export default IconMaterialNearbyOff;
