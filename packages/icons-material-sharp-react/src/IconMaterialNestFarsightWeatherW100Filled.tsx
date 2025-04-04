import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNestFarsightWeatherW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NestFarsightWeatherW100Filled'

      short_name='NestFarsightWeather'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-392h250q25 0 41.5-17.19 16.5-17.2 16.5-41Q668-474 652-491q-16-17-40-17h-37l-11-38q-8.17-27.9-31.43-44.95Q509.31-608 479.77-608 454-608 433-594q-21 14-32 37l-13 29h-31q-27.37 1.14-46.18 20.73Q292-487.67 292-460.4q0 28.4 19.83 48.4 19.84 20 48.17 20Zm0-28q-17 0-28.5-11.5T320-460q0-17 11-28t27-12h48l20-45q8-17 22.5-26t31.5-9q20 0 36 11.5t21 31.5l16 57h58q13 0 21 8.5t8 21.5q0 12-8.5 21t-21.5 9H360Zm120.17 288q-72.17 0-135.73-27.39-63.56-27.39-110.57-74.35-47.02-46.96-74.44-110.43Q132-407.65 132-479.83q0-72.17 27.39-135.73 27.39-63.56 74.35-110.57 46.96-47.02 110.43-74.44Q407.65-828 479.83-828q72.17 0 135.73 27.39 63.56 27.39 110.57 74.35 47.02 46.96 74.44 110.43Q828-552.35 828-480.17q0 72.17-27.39 135.73-27.39 63.56-74.35 110.57-46.96 47.02-110.43 74.44Q552.35-132 480.17-132Z"/>
    </Icon>
  );
});

IconMaterialNestFarsightWeatherW100Filled.displayName = 'OnesyIconMaterialNestFarsightWeatherW100Filled';

export default IconMaterialNestFarsightWeatherW100Filled;
