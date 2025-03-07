import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsOff'

      short_name='DirectionsOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="m21.71 11.29-9-9a.996.996 0 00-1.41 0L8.21 5.38l1.41 1.41L12 4.42 19.58 12l-2.38 2.38 1.41 1.41 3.09-3.09c.4-.37.4-1 .01-1.41z"/><polygon points="13,7.5 13,10.17 15.17,12.34 16.5,11"/><path d="m1.39 4.22 3.99 3.99-3.09 3.09a.996.996 0 000 1.41l9 9c.39.39 1.02.39 1.41 0l3.09-3.09 3.99 3.99 1.41-1.41L2.81 2.81 1.39 4.22zm6.64 6.63c-.01.05-.04.1-.04.15v4h2v-2.18l4.38 4.38L12 19.58 4.42 12 6.8 9.62l1.23 1.23z"/></g></g>
    </Icon>
  );
});

IconMaterialDirectionsOff.displayName = 'OnesyIconMaterialDirectionsOff';

export default IconMaterialDirectionsOff;
