import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDepartureBoardW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DepartureBoardW100'

      short_name='DepartureBoard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m726-594 20-20-72-71.61V-794h-28v120l80 80Zm-566-98h265-265Zm80 252h-80 480-400Zm-12 228v80h-28v-88q-25-6-46.5-37.5T132-320v-360q0-57 71.5-82.5T436-788q-3 7-6 13.5t-5 14.5q-135 2-196 18t-69 50h252v14q0 7 1 14H160v196h371q15 9 31.5 16t34.5 12H160v120q0 33 23.5 56.5T240-240h320q33 0 56.5-23.5T640-320v-113q7 1 14 1h14v112q0 31-21.5 62.5T600-220v88h-28v-80H228Zm431.59-320Q598-532 555-575t-43-105.38Q512-742 555.04-785q43.04-43 105.37-43Q722-828 765-785t43 105q0 62-43.41 105t-105 43ZM260.24-300q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm280 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Z"/>
    </Icon>
  );
});

IconMaterialDepartureBoardW100.displayName = 'OnesyIconMaterialDepartureBoardW100';

export default IconMaterialDepartureBoardW100;
