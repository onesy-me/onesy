import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialForYouW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ForYouW100'

      short_name='ForYou'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-460q60 0 122.5-8T722-493q14-5 26 4.4 12 9.41 12 24.6v251q0 10-5.58 17.38-5.57 7.38-14.42 10.62-63 22-128.5 33.5T480-140q-66 0-131.5-11.5T220-185q-8.85-3.24-14.42-10.62Q200-203 200-213v-251q0-15.19 12-24.6 12-9.4 26-4.4 57 17 119.5 25t122.5 8Zm252 248v-254q-47 14-120 24t-132 10q-59 0-132-10t-120-24v254q44 18 118 31t134 13q60 0 134-13t118-31ZM480-820q49.5 0 84.75 35.25T600-700q0 49.5-35.25 84.75T480-580q-49.5 0-84.75-35.25T360-700q0-49.5 35.25-84.75T480-820Zm.04 212Q518-608 545-635.04q27-27.03 27-65Q572-738 544.96-765q-27.03-27-65-27Q442-792 415-764.96q-27 27.03-27 65Q388-662 415.04-635q27.03 27 65 27Zm-.04-92Zm0 383Z"/>
    </Icon>
  );
});

IconMaterialForYouW100.displayName = 'OnesyIconMaterialForYouW100';

export default IconMaterialForYouW100;
