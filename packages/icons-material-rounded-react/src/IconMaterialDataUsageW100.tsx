import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDataUsageW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DataUsageW100'

      short_name='DataUsage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-132q-72 0-135.5-27.5T234-234q-47-47-74.5-110.5T132-480q0-128 80.5-224T420-823q7-2 12 2.5t5 11.5q0 5-2.5 8.5T428-796q-117 20-192.5 109T160-480q0 133 93.5 226.5T480-160q72 0 137.5-30T727-274q4-5 8.5-6t9.5 2q5 3 5 10t-6 14q-53 60-120 91t-144 31Zm320-348q0-118-76.5-207.5T531-796q-5-1-7.5-4.5T521-809q0-7 5.5-11t12.5-3q124 19 206.5 117T828-480q0 32-5 62t-16 56q-2 6-8 8.5t-12 .5q-5-2-6.5-6.5t.5-10.5q9-29 14-57t5-53Z"/>
    </Icon>
  );
});

IconMaterialDataUsageW100.displayName = 'OnesyIconMaterialDataUsageW100';

export default IconMaterialDataUsageW100;
