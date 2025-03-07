import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBusAlertW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BusAlertW100Filled'

      short_name='BusAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M659.59-532Q598-532 555-575t-43-105.38Q512-742 555.04-785q43.04-43 105.37-43Q722-828 765-785t43 105q0 62-43.41 105t-105 43ZM646-660h28v-108h-28v108Zm14 72q8 0 12.5-5t5.5-12q0-7.6-5-13.3-5-5.7-13-5.7t-13 5q-5 5-5 13t5 13q5 5 13 5ZM260.24-300q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5Zm280 0q16.76 0 28.26-11.74 11.5-11.73 11.5-28.5 0-16.76-11.74-28.26-11.73-11.5-28.5-11.5-16.76 0-28.26 11.74-11.5 11.73-11.5 28.5 0 16.76 11.74 28.26 11.73 11.5 28.5 11.5ZM200-132v-88q-25-6-46.5-37.5T132-320v-360q0-57 71.5-82.5T436-788q-11 25-17.5 52t-6.5 56q0 4.4.5 8.2.5 3.8.5 7.8H160v196h371q29 17 61.5 26.5T660-432h8v112q0 31-21.5 62.5T600-220v88h-28v-80H228v80h-28Z"/>
    </Icon>
  );
});

IconMaterialBusAlertW100Filled.displayName = 'OnesyIconMaterialBusAlertW100Filled';

export default IconMaterialBusAlertW100Filled;
