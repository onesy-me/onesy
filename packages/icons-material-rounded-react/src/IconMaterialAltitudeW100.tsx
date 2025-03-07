import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAltitudeW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AltitudeW100'

      short_name='Altitude'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M759.96-480q-5.96 0-9.96-4.02-4-4.03-4-9.98v-190l-81 80q-4 4-9.5 3.5t-9.67-4.5q-3.83-3.67-3.83-9.33 0-5.67 4-9.67l93-92q9-9 21-9t21 9l93 92q4 4 3.5 9.5t-4.5 10q-4 4.5-9.5 4.5t-9.5-4l-80-80v190q0 5.95-4.04 9.98-4.03 4.02-10 4.02ZM199.5-174q-19.5 0-27.5-16.5t3-31.5l86-116q4.5-6 10.88-9 6.37-3 13.12-3 6.75 0 13.13 3 6.37 3 10.87 9l102 136h354L565-468 450-315q-5 6-10 6t-10-3q-5-3-6.5-9t3.5-12l114-151q4.5-6 10.88-9 6.37-3 13.12-3 6.75 0 13.13 3 6.37 3 10.87 9l196 262q11 15 2.81 31.5T761-174H199.5ZM439-202Z"/>
    </Icon>
  );
});

IconMaterialAltitudeW100.displayName = 'OnesyIconMaterialAltitudeW100';

export default IconMaterialAltitudeW100;
