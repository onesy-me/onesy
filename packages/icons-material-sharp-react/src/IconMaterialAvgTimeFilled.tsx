import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAvgTimeFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AvgTimeFilled'

      short_name='AvgTime'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-840v-80h240v80H360Zm37 456-52-96H122q15-135 117-227.5T480-800q62 0 119 20t107 58l56-56 56 56-56 56q32 42 51 88.5t25 97.5H664L560-670 397-384Zm83 304q-139 0-241-92.5T122-400h174l104 190 163-286 52 96h223q-15 135-116.5 227.5T480-80Z"/>
    </Icon>
  );
});

IconMaterialAvgTimeFilled.displayName = 'OnesyIconMaterialAvgTimeFilled';

export default IconMaterialAvgTimeFilled;
