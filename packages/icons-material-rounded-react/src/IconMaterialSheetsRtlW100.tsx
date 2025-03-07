import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSheetsRtlW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SheetsRtlW100'

      short_name='SheetsRtl'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m270-157-92-92q-9-9-9-21t9-21l92-92q4-4 10-4.5t10 4.5q4 4 4 9.5t-4 9.5l-79 80h549q6 0 10 4t4 10q0 6-4 10t-10 4H211l79 80q4 4 4.5 9t-4.5 10q-4 4-10 4t-10-4Zm-13-305q-19 0-32-13t-13-32v-286q0-19 13-32t32-13h446q19 0 32 13t13 32v286q0 19-13 32t-32 13H257Zm-17-202h226v-146H264q-10 0-17 7t-7 17v122Zm254 0h226v-122q0-10-7-17t-17-7H494v146Zm-28 174v-146H240v122q0 10 7 17t17 7h202Zm28 0h202q10 0 17-7t7-17v-122H494v146Z"/>
    </Icon>
  );
});

IconMaterialSheetsRtlW100.displayName = 'OnesyIconMaterialSheetsRtlW100';

export default IconMaterialSheetsRtlW100;
