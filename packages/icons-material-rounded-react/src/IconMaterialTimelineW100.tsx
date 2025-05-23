import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTimelineW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TimelineW100'

      short_name='Timeline'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-266q-23 0-38.5-15.5T66-320q0-23 15.5-38.5T120-374q8 0 15 1.5t13 6.5l206-206q-5-6-6.5-13t-1.5-15q0-23 15.5-38.5T400-654q23 0 38.5 15.5T454-600q0 6-6 26l126 126q6-3 12-4.5t14-1.5q8 0 14.5 1.5T626-446l168-168q-5-5-6.5-11.5T786-640q0-23 15.5-38.5T840-694q23 0 38.5 15.5T894-640q0 23-15.5 38.5T840-586q-8 0-14.5-1.5T814-594L646-426q5 5 6.5 11.5T654-400q0 23-15.5 38.5T600-346q-23 0-38.5-15.5T546-400q0-8 1.5-15t6.5-13L428-554q-6 5-13 6.5t-15 1.5q-6 0-26-6L168-346q3 6 4.5 12t1.5 14q0 23-15.5 38.5T120-266Z"/>
    </Icon>
  );
});

IconMaterialTimelineW100.displayName = 'OnesyIconMaterialTimelineW100';

export default IconMaterialTimelineW100;
