import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAppBadgingW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AppBadgingW100'

      short_name='AppBadging'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-480Zm-348 0q0-79 31.5-145.5T249-740q54-48 125-71.5T523-825q6 1 9 5t1.98 9.77q-1.02 5.78-5.61 9.5Q523.78-797 518-798q-71-9-135 12.5T269-720q-50 44-79.5 106T160-480q0 134 93 227t227 93q72 0 132.96-28.91Q673.92-217.82 719-268q46-51 67-116t12-134q-1-5.78 2.73-10.37 3.72-4.59 9.5-5.61Q816-535 820-532t5 9q9 78-13.5 148.5t-70.34 124.77q-50.5 57.02-117.83 87.38Q556-132 480-132q-72.21 0-135.72-27.4-63.51-27.41-110.49-74.39-46.98-46.98-74.39-110.49Q132-407.79 132-480Zm568.12-126q-39.12 0-66.62-27.38-27.5-27.38-27.5-66.5 0-39.12 27.38-66.62 27.38-27.5 66.5-27.5 39.12 0 66.62 27.38 27.5 27.38 27.5 66.5 0 39.12-27.38 66.62-27.38 27.5-66.5 27.5Z"/>
    </Icon>
  );
});

IconMaterialAppBadgingW100.displayName = 'OnesyIconMaterialAppBadgingW100';

export default IconMaterialAppBadgingW100;
