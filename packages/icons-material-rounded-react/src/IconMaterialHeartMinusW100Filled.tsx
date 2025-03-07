import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHeartMinusW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HeartMinusW100Filled'

      short_name='HeartMinus'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M600-426q-6 0-10-4t-4-10q0-6 4-10t10-4h240q6 0 10 4t4 10q0 6-4 10t-10 4H600ZM440-202q-6 0-11.5-1.5T418-210q-97-89-160.5-152t-100-110.5Q121-520 106.5-558T92-634q0-71 48.5-119.5T260-802q53 0 99 28.5t81 83.5q35-55 81-83.5t99-28.5q61 0 106 36t58 93q2 11-6 18t-19 5q-10-2-19.5-3t-19.5-1q-89 0-151.5 62.5T506-440q0 32 9.5 62t26.5 56q6 9 5.5 21t-8.5 20l-77 71q-5 5-10.5 6.5T440-202Z"/>
    </Icon>
  );
});

IconMaterialHeartMinusW100Filled.displayName = 'OnesyIconMaterialHeartMinusW100Filled';

export default IconMaterialHeartMinusW100Filled;
