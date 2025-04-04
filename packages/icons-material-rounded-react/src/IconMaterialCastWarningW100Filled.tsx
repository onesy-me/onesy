import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCastWarningW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CastWarningW100Filled'

      short_name='CastWarning'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-608q8 0 13-5t5-13q0-8-5-13t-13-5q-8 0-13 5t-5 13q0 8 5 13t13 5Zm0-72q6 0 10-4t4-10v-80q0-6-4-10t-10-4q-6 0-10 4t-4 10v80q0 6 4 10t10 4Zm0 230q19 0 37-3t36-8q13-4 24 3t11 21v165q0 25-17.5 42.5T768-212H597q-11 0-18-7.5t-8-18.5q-4-79-36-149t-84-125q-52-55-120.5-90.5T185-648q-23-3-38-16.5T132-700q0-22 15.5-35t38.5-13h263q11 0 18.5 8.5T473-720q-10 109 63 189.5T720-450Zm0-100q-62 0-105-43t-43-105q0-62 43-105t105-43q62 0 105 43t43 105q0 62-43 105t-105 43ZM164-212q-14 0-23-9t-9-23q0-14 9-23t23-9q14 0 23 9t9 23q0 14-9 23t-23 9Zm146 0q-6 0-10-4.5t-5-10.5q-5-59-47.5-100T145-375q-6-1-9.5-5t-3.5-10q0-6 5-10t11-3q71 6 120.5 55.5T323-227q1 6-3 10.5t-10 4.5Zm148 0q-7 0-10.5-6t-4.5-14q-8-119-92-202.5T147-524q-6 0-10.5-4t-4.5-10q0-6 5-10t12-4q132 6 224.5 99T472-228q0 7-4 11.5t-10 4.5Z"/>
    </Icon>
  );
});

IconMaterialCastWarningW100Filled.displayName = 'OnesyIconMaterialCastWarningW100Filled';

export default IconMaterialCastWarningW100Filled;
