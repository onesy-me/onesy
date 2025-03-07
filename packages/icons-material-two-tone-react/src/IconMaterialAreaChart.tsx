import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAreaChart = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AreaChart'

      short_name='AreaChart'

      viewBox='0 0 24 24'

      {...props}
    >
      <rect fill="none" height="24" width="24"/><polygon opacity=".3" points="19,16.95 12,11.5 8,17 5,14.6 5,11 7.44,12.83 12.4,5.88 16.3,9 19,9"/><path d="M17,7l-5-4l-5,7L3,7v13h18V7H17z M19,16.95l-7-5.45L8,17l-3-2.4V11l2.44,1.83l4.96-6.95L16.3,9H19V16.95z"/>
    </Icon>
  );
});

IconMaterialAreaChart.displayName = 'OnesyIconMaterialAreaChart';

export default IconMaterialAreaChart;
