import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWaterDropW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='WaterDropW100'

      short_name='WaterDrop'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.82-132Q365-132 288.5-211.06 212-290.11 212-407.86q0-52.14 23.8-105.28 23.8-53.15 59.5-102 35.7-48.86 77-92.29Q413.6-750.86 449-783q7-6 14.88-9.5 7.87-3.5 16.12-3.5t16.13 3.5Q504-789 511-783q35.4 32.14 76.7 75.57 41.3 43.43 77 92.29 35.7 48.85 59.5 102Q748-460 748-407.86q0 117.75-76.68 196.8Q594.63-132 479.82-132Zm.18-28q104 0 172-70.5T720-408q0-73-60.5-165T480-774Q361-665 300.5-573T240-408q0 107 68 177.5T480-160Zm0-312Zm8 256q8-1 12-5.15t4-10.01q0-6.84-4.78-10.34T487-244q-41 3-93-26.5T330-367q-2-9-5.5-13t-9.5-4q-6 0-10.5 4.5T302-364q15 81 76 116t110 32Z"/>
    </Icon>
  );
});

IconMaterialWaterDropW100.displayName = 'OnesyIconMaterialWaterDropW100';

export default IconMaterialWaterDropW100;
