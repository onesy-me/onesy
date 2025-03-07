import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYardW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YardW100Filled'

      short_name='Yard'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-200q0-78-61-139t-139-61q0 78 61 139t139 61Zm0-210q23 0 37.5-14.5T532-462v-4q6 5 13.4 7.5t16.97 2.5q22.63 0 38.13-15.59 15.5-15.58 15.5-38.09 0-17.32-8-29.82T586-558q14-6 22-18.6 8-12.6 8-29.4 0-22.65-15.53-38.32Q584.93-660 562.49-660q-9.49 0-16.99 2.5Q538-655 532-650v-6q0-23-14.5-37.5T480-708q-23 0-37.5 14.5T428-656v6q-6-5-13.4-7.5t-16.97-2.5q-22.63 0-38.13 15.59-15.5 15.58-15.5 38.09 0 17.32 8 29.82t22 18.5q-14 6-22 18.6-8 12.6-8 29.4 0 22.65 15.53 38.32Q375.07-456 397.51-456q9.49 0 16.99-2.5Q422-461 428-466v4q0 23 14.5 37.5T480-410Zm.16-64q-35.16 0-59.66-24.5T396-558q0-35.23 24.34-59.61Q444.68-642 479.84-642t59.66 24.39Q564-593.23 564-558q0 35-24.34 59.5t-59.5 24.5ZM480-200q78 0 139-61t61-139q-78 0-139 61t-61 139Zm-348 68v-696h696v696H132Z"/>
    </Icon>
  );
});

IconMaterialYardW100Filled.displayName = 'OnesyIconMaterialYardW100Filled';

export default IconMaterialYardW100Filled;
