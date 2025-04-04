import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppBadgingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBadgingW100Filled'

      short_name='AppBadging'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M700.12-606q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5ZM479.83-132q-71.83 0-135.39-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83 132-552 159-615q27-63 74.5-110.5T344-800q63-27 135-27 25 0 33.5 3t13.5 12q3 6 2.33 13.67-.66 7.66-3.33 15.33-10 19-14.5 39.5T506-700q0 80.51 56.74 137.26Q619.49-506 700-506q21 0 42-4.5t41-14.5q7-3 14-3t14 3q10 5 13 14t3 32q0 72-27 135t-74.5 110.5Q678-186 614.83-159q-63.18 27-135 27Z"/>
    </Icon>
  );
});

IconMaterialAppBadgingW100Filled.displayName = 'OnesyIconMaterialAppBadgingW100Filled';

export default IconMaterialAppBadgingW100Filled;
