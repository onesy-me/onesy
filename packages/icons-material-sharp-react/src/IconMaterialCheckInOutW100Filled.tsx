import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCheckInOutW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CheckInOutW100Filled'

      short_name='CheckInOut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M304-262q-36 0-61.5-25.5T215-351q1-38 26.5-63.5t63-25.5q37.5 0 63.5 26t26 63q0 37-26 63t-64 26Zm-80-257v-179h28v179h-28Zm80 232q26 0 44.5-18.5T367-351q0-27-18.5-46t-44.91-19q-25.59 0-44.09 19-18.5 19-18.5 46t18.5 45.5Q278-287 304-287Zm-2-232v-179h34l81 134v-134h28v179h-31l-85-141v141h-27Zm203.34 257q-28.34 0-47.84-21-19.5-21-19.5-51v-106h26v107q0 19.71 11.89 32.86 11.88 13.14 29 13.14 17.11 0 28.61-13.14Q545-313.29 545-333v-107h27v106q0 30-19.5 51t-47.16 21ZM666-262v-154h-50v-24h128v24h-51v154h-27Z"/>
    </Icon>
  );
});

IconMaterialCheckInOutW100Filled.displayName = 'OnesyIconMaterialCheckInOutW100Filled';

export default IconMaterialCheckInOutW100Filled;
