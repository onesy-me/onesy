import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorOccupiedW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorOccupiedW100Filled'

      short_name='SensorOccupied'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-526q-39 0-66.5-27.5T386-620q0-39 27.5-66.5T480-714q39 0 66.5 27.5T574-620q0 39-27.5 66.5T480-526ZM266-356v-20q0-16 7-28t21-20q42-25 89-37.5t97-12.5q49 0 96.5 12.5T666-424q13 8 20.5 20.5T694-376v20q0 13-8.5 21.5T664-326H296q-13 0-21.5-8.5T266-356Zm385-485q-7-3-10-9t-1-12q2-6 8.5-7t12.5 2q72 35 121 84t86 122q3 6 2 12.5t-7 8.5q-6 2-12-1t-9-9q-30-63-79-112.5T651-841Zm-342 0q-63 30-112 79t-79 112q-3 6-8.5 9T98-640q-6-2-7.5-8.5T92-661q35-73 85-122t122-84q6-3 13-2t9 7q2 6-1.5 12t-10.5 9ZM119-309q30 63 79 112t112 79q6 3 9.5 8.5T320-98q-3 6-10 7t-14-2q-69-34-120.5-86T92-300q-3-6-1.5-12.5T98-321q6-2 12 1.5t9 10.5Zm722 0q3-7 9-10.5t12-1.5q6 2 7 9t-2 13q-35 72-86 123T659-92q-6 3-12 1.5t-8-7.5q-2-6 1.5-11.5t9.5-8.5q63-30 112-79t79-112Z"/>
    </Icon>
  );
});

IconMaterialSensorOccupiedW100Filled.displayName = 'OnesyIconMaterialSensorOccupiedW100Filled';

export default IconMaterialSensorOccupiedW100Filled;
