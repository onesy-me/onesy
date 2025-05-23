import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHumidityPercentageW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='HumidityPercentageW100Filled'

      short_name='HumidityPercentage'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-132Q365-132 288.5-211.06 212-290.11 212-407.86q0-52.14 23.8-105.28 23.8-53.15 59.5-102 35.7-48.86 77-92.29Q413.6-750.86 449-783q7-6 14.88-9.5 7.87-3.5 16.12-3.5t16.13 3.5Q504-789 511-783q35.4 32.14 76.7 75.57 41.3 43.43 77 92.29 35.7 48.85 59.5 102Q748-460 748-407.86q0 117.75-76.68 196.8Q594.63-132 479.82-132Zm80.06-154q14.12 0 24.12-9.88 10-9.88 10-24T584.12-344q-9.88-10-24-10T536-344.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10ZM368-289q4 4 9.82 4t10.18-4l203-203q4-4.36 4-10.18 0-5.82-4-9.82t-9.5-4q-5.5 0-9.5 4L368-308q-4 4-4 9.5t4 9.5Zm31.88-157q14.12 0 24.12-9.88 10-9.88 10-24T424.12-504q-9.88-10-24-10T376-504.12q-10 9.88-10 24t9.88 24.12q9.88 10 24 10Z"/>
    </Icon>
  );
});

IconMaterialHumidityPercentageW100Filled.displayName = 'OnesyIconMaterialHumidityPercentageW100Filled';

export default IconMaterialHumidityPercentageW100Filled;
