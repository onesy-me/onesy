import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHourglassArrowUpFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HourglassArrowUpFilled'

      short_name='HourglassArrowUp'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M100-160v-80h60v-100q0-42 18-78t50-62q-32-26-50-62t-18-78v-100h-60v-80h480v80h-60v100q0 42-18 78t-50 62q32 26 50 62t18 78v100h60v80H100Zm640 0v-488l-44 44-56-56 140-140 140 140-57 56-43-43v487h-80Z"/>
    </Icon>
  );
});

IconMaterialHourglassArrowUpFilled.displayName = 'OnesyIconMaterialHourglassArrowUpFilled';

export default IconMaterialHourglassArrowUpFilled;
