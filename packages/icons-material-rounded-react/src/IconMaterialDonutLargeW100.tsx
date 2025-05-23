import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDonutLargeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DonutLargeW100'

      short_name='DonutLarge'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-480q0 118 75.5 207T428-164q4 1 6.5 4.5t2.5 8.5q0 7-5 11.5t-12 2.5q-127-23-207.5-119T132-480q0-128 80.5-224T420-823q7-2 12 2.5t5 11.5q0 5-2.5 8.5T428-796q-117 20-192.5 109T160-480Zm567 246q-38 38-85.5 63.5T539-137q-7 1-12.5-3t-5.5-11q0-5 2.5-8.5t7.5-4.5q51-8 95.5-31.5T707-255q35-36 58-80t31-94q1-5 4.5-7.5t8.5-2.5q7 0 11 5.5t3 12.5q-8 55-33 102t-63 85Zm0-492q38 38 63 85t33 102q1 7-3 12.5t-11 5.5q-5 0-8.5-2.5T796-531q-8-50-31-94t-58-80q-36-36-80.5-59.5T531-796q-5-1-7.5-4.5T521-809q0-7 5.5-11t12.5-3q55 8 102.5 33.5T727-726Z"/>
    </Icon>
  );
});

IconMaterialDonutLargeW100.displayName = 'OnesyIconMaterialDonutLargeW100';

export default IconMaterialDonutLargeW100;
