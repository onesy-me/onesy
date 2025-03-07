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
      <path d="M480-200q0-40-16.5-75.5T419-339q-25-25-55.5-40.5T298-398q-7-1-12 4t-4 12q3 35 18.5 65.5T341-261q28 28 63.5 44.5T480-200Zm0-210q23 0 37.5-14.5T532-462v-4q6 5 13.5 7.5T562-456q23 0 38.5-15.5T616-510q0-17-8-29.5T586-558q14-6 22-18.5t8-29.5q0-23-15.5-38.5T562-660q-9 0-16.5 2.5T532-650v-6q0-23-14.5-37.5T480-708q-23 0-37.5 14.5T428-656v6q-6-5-13.5-7.5T398-660q-23 0-38.5 15.5T344-606q0 17 8 29.5t22 18.5q-14 6-22 18.5t-8 29.5q0 23 15.5 38.5T398-456q9 0 16.5-2.5T428-466v4q0 23 14.5 37.5T480-410Zm0-64q-35 0-59.5-24.5T396-558q0-35 24.5-59.5T480-642q35 0 59.5 24.5T564-558q0 35-24.5 59.5T480-474Zm0 274q40 0 75.5-16.5T619-261q25-25 40.5-55.5T678-382q1-7-4-12t-12-4q-35 3-65.5 18.5T541-339q-28 28-44.5 63.5T480-200Zm-288 68q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h576q26 0 43 17t17 43v576q0 26-17 43t-43 17H192Z"/>
    </Icon>
  );
});

IconMaterialYardW100Filled.displayName = 'OnesyIconMaterialYardW100Filled';

export default IconMaterialYardW100Filled;
