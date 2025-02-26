import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBlindsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BlindsW100Filled'

      short_name='Blinds'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M132-172v-28h80v-588h536v588h80v28H132Zm108-469h333v-119H240v119Zm0 147h333v-119H240v119Zm0 294h480v-266H601v95q11 5 17.5 14t6.5 21q0 15.74-11.18 26.87t-27 11.13Q571-298 560-309.13T549-336q0-12 6.5-21t17.5-14v-95H240v266Zm361-441h119v-119H601v119Zm0 147h119v-119H601v119Z"/>
    </Icon>
  );
});

IconMaterialBlindsW100Filled.displayName = 'OnesyIconMaterialBlindsW100Filled';

export default IconMaterialBlindsW100Filled;
