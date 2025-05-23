import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDepartureBoardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DepartureBoardW100Filled'

      short_name='DepartureBoard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m726-594 20-20-72-71.61V-794h-28v120l80 80Zm-66.41 62Q598-532 555-575t-43-105.38Q512-742 555.04-785q43.04-43 105.37-43Q722-828 765-785t43 105q0 62-43.41 105t-105 43ZM260.24-300q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm280 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM200-132v-88q-25-6-46.5-37.5T132-320v-360q0-57 71.5-82.5T436-788q-11 25-17.5 52t-6.5 56q0 4.4.5 8.2.5 3.8.5 7.8H160v196h371q29 17 61.5 26.5T660-432h8v112q0 31-21.5 62.5T600-220v88h-28v-80H228v80h-28Z"/>
    </Icon>
  );
});

IconMaterialDepartureBoardW100Filled.displayName = 'OnesyIconMaterialDepartureBoardW100Filled';

export default IconMaterialDepartureBoardW100Filled;
