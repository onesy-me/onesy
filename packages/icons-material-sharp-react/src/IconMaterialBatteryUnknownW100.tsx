import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryUnknownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknownW100'

      short_name='BatteryUnknown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-194q0-10.93 1-21.46 1-10.54 6.35-20.47Q675-250 687.4-259.55q12.4-9.54 21.2-22.27Q711-285 715-300.4q0-13.77-10.74-22.69Q693.51-332 680-332q-14 0-23.5 9T642-300l-35-15q7.93-24.09 27.77-38.55Q654.61-368 680-368q29.36 0 51.18 19.14Q753-329.71 753-301q0 8-2 16t-6.94 14.67Q735-257 723.5-247.5q-11.5 9.5-19.3 23.46Q699-215 699-194h-39Zm20 82q-11.12 0-19.06-7.77Q653-127.55 653-139q0-10.71 7.92-18.35 7.91-7.65 19-7.65 11.08 0 19.08 7.71 8 7.71 8 18.5T699.23-120q-7.78 8-19.23 8Zm-326-48Zm-28 28v-643h90v-53h128v53h90v305q-8 2-14.5 3.5T606-463v-285H354v588h105q3 8 6 14.5t7 13.5H326Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknownW100.displayName = 'OnesyIconMaterialBatteryUnknownW100';

export default IconMaterialBatteryUnknownW100;
