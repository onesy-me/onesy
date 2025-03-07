import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryUnknownW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryUnknownW100Filled'

      short_name='BatteryUnknown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M660-194q0-10.93 1-21.46 1-10.54 6.35-20.47Q675-250 687.4-259.55q12.4-9.54 21.2-22.27Q711-285 715-300.4q0-13.77-10.74-22.69Q693.51-332 680-332q-14 0-23.5 9T642-300l-35-15q7.93-24.09 27.77-38.55Q654.61-368 680-368q29.36 0 51.18 19.14Q753-329.71 753-301q0 8-2 16t-6.94 14.67Q735-257 723.5-247.5q-11.5 9.5-19.3 23.46Q699-215 699-194h-39Zm20 82q-11.12 0-19.06-7.77Q653-127.55 653-139q0-10.71 7.92-18.35 7.91-7.65 19-7.65 11.08 0 19.08 7.71 8 7.71 8 18.5T699.23-120q-7.78 8-19.23 8Zm-324-20q-12.75 0-21.37-8.63Q326-149.25 326-162v-583q0-12.75 8.63-21.38Q343.25-775 356-775h60v-53h128v53h60.21q12.79 0 21.29 8.62 8.5 8.63 8.5 21.38v275q-81 14-135.5 77.5T444-243q0 30 7 58t21 53H356Z"/>
    </Icon>
  );
});

IconMaterialBatteryUnknownW100Filled.displayName = 'OnesyIconMaterialBatteryUnknownW100Filled';

export default IconMaterialBatteryUnknownW100Filled;
