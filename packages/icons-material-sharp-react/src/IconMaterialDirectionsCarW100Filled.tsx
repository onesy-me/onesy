import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDirectionsCarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DirectionsCarW100Filled'

      short_name='DirectionsCar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-252v80h-28v-300l83-236h450l83 236v300h-28v-80H200Zm12-248h536l-64-180H276l-64 180Zm84.24 164q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm368 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialDirectionsCarW100Filled.displayName = 'OnesyIconMaterialDirectionsCarW100Filled';

export default IconMaterialDirectionsCarW100Filled;
