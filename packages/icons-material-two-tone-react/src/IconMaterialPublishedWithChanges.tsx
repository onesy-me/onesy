import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPublishedWithChanges = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PublishedWithChanges'

      short_name='PublishedWithChanges'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><path d="M17.66,9.53l-7.07,7.07l-4.24-4.24l1.41-1.41l2.83,2.83l5.66-5.66L17.66,9.53z M4,12c0-2.33,1.02-4.42,2.62-5.88L9,8.5v-6H3 l2.2,2.2C3.24,6.52,2,9.11,2,12c0,5.19,3.95,9.45,9,9.95v-2.02C7.06,19.44,4,16.07,4,12z M22,12c0-5.19-3.95-9.45-9-9.95v2.02 c3.94,0.49,7,3.86,7,7.93c0,2.33-1.02,4.42-2.62,5.88L15,15.5v6h6l-2.2-2.2C20.76,17.48,22,14.89,22,12z"/>
    </Icon>
  );
});

IconMaterialPublishedWithChanges.displayName = 'OnesyIconMaterialPublishedWithChanges';

export default IconMaterialPublishedWithChanges;
