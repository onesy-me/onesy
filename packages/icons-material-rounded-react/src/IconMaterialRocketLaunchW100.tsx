import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRocketLaunchW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RocketLaunchW100'

      short_name='RocketLaunch'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M305-454q20-40 44-77t53-72l-63-13q-8-2-15.5.5T310-607L209-506q-3 3-2 7t5 6l93 39Zm451-306q-99 8-166.5 40.5T461-626q-45 45-78 93t-56 97l113 113q49-23 97.5-56t93.5-78q61-61 93.5-128T765-751v-3.5q0-1.5-2-3.5t-3.5-2H756ZM544-539q-16-16-16-38t16-38q16-16 38-16t38 16q16 16 16 38t-16 38q-16 16-38 16t-38-16Zm-86 239 39 93q2 4 6 4.5t7-2.5l101-100q6-6 8.5-13.5t.5-15.5l-13-63q-35 29-72 53t-77 44Zm334-458q-3 97-38.5 175.5T650-436q-5 5-9.5 9t-9.5 9l16 78q3 15-1.5 29T630-286L523-179q-11 11-27 8t-22-18l-44-104-133-134-104-44q-15-6-17.5-22t8.5-27l107-107q11-11 25-15t29-1l78 16q5-5 8.5-9t8.5-9q68-68 146.5-104T762-788q6 0 11.5 2t10.5 7q5 5 6.5 10t1.5 11ZM219-311q20-20 48.5-19.5T316-310q20 20 20 48.5T316-213q-29 29-68 37.5T169-164q3-41 12-79.5t38-67.5Zm20 21q-18 18-25 42t-10 50q26-3 50-10.5t42-25.5q12-12 12-28.5T296-291q-12-12-28.5-11.5T239-290Z"/>
    </Icon>
  );
});

IconMaterialRocketLaunchW100.displayName = 'OnesyIconMaterialRocketLaunchW100';

export default IconMaterialRocketLaunchW100;
