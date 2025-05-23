import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNotListedLocationW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NotListedLocationW100Filled'

      short_name='NotListedLocation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-353q9 0 15.5-6.5T502-375q0-9-6.5-15.5T480-397q-9 0-15.5 6.5T458-375q0 9 6.5 15.5T480-353Zm98-261q0-39-26.5-64T483-703q-37 0-63 18.5T393-646q0 5 2 8t7 4q5 1 9-2t6-6q7-15 23.5-24t42.5-9q29 0 48 17.5t19 43.5q0 23-12.5 37.5T510-548q-20 19-32 37t-12 38q0 6 4 10t10 4q6 0 10-4t4-10q0-14 12-29t23-26q18-18 33.5-38t15.5-48Zm-98 467q-8 0-16-2.5t-15-8.5q-36-33-78-78.5T292.5-333q-36.5-51-61-106T207-547q0-120 78.5-200.5T480-828q116 0 194.5 80.5T753-547q0 53-24.5 107.5t-60.5 106Q632-282 590-237t-78 78q-7 6-15.5 9t-16.5 3Z"/>
    </Icon>
  );
});

IconMaterialNotListedLocationW100Filled.displayName = 'OnesyIconMaterialNotListedLocationW100Filled';

export default IconMaterialNotListedLocationW100Filled;
