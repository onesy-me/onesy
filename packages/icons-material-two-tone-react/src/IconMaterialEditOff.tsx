import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEditOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EditOff'

      short_name='EditOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><path d="M5,18.08V19h0.92l5.12-5.12l-0.92-0.92L5,18.08z M14.06,9.02l-1.11,1.11l0.92,0.92l1.11-1.11L14.06,9.02z" opacity=".3"/><g><path d="M14.06,9.02l0.92,0.92l-1.11,1.11l1.41,1.41l2.52-2.52l-3.75-3.75l-2.52,2.52l1.41,1.41L14.06,9.02z M20.71,7.04 c0.39-0.39,0.39-1.02,0-1.41l-2.34-2.34C18.17,3.09,17.92,3,17.66,3s-0.51,0.1-0.7,0.29l-1.83,1.83l3.75,3.75L20.71,7.04z M2.81,2.81L1.39,4.22l7.32,7.32L3,17.25V21h3.75l5.71-5.71l7.32,7.32l1.41-1.41L2.81,2.81z M5.92,19H5v-0.92l5.13-5.13l0.92,0.92 L5.92,19z"/></g></g>
    </Icon>
  );
});

IconMaterialEditOff.displayName = 'OnesyIconMaterialEditOff';

export default IconMaterialEditOff;
