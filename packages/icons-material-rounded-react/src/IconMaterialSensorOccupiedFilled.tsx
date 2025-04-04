import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorOccupiedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorOccupiedFilled'

      short_name='SensorOccupied'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-520q-50 0-85-35t-35-85q0-50 35-85t85-35q50 0 85 35t35 85q0 50-35 85t-85 35ZM240-356q0-21 10.5-39.5T279-425q45-26 95-40.5T480-480q56 0 106 14.5t95 40.5q18 11 28.5 29.5T720-356q0 32-22 54t-54 22H316q-32 0-54-22t-22-54Zm431-475q-15-8-21.5-23.5t.5-31.5q7-16 22-22t30 2q65 34 116 85.5T904-704q8 15 3 31t-21 23q-16 7-31.5.5T831-671q-28-51-68.5-91.5T671-831Zm-382 0q-51 28-91.5 68.5T129-671q-8 15-23.5 21.5T74-650q-16-7-21-23t3-31q35-64 86-115.5T258-905q15-8 30.5-2.5T311-886q7 16 0 31.5T289-831ZM129-289q28 51 68.5 91.5T289-129q15 8 22 23.5t0 31.5q-7 16-23 21.5T256-55q-64-34-115.5-86T55-258q-8-15-2.5-30.5T74-311q16-7 31.5 0t23.5 22Zm702 0q8-15 23.5-22t31.5 0q16 7 22 22.5t-2 30.5q-34 65-85.5 116T704-56q-15 8-31 3t-23-21q-7-16-.5-31.5T671-129q51-28 91.5-68.5T831-289Z"/>
    </Icon>
  );
});

IconMaterialSensorOccupiedFilled.displayName = 'OnesyIconMaterialSensorOccupiedFilled';

export default IconMaterialSensorOccupiedFilled;
