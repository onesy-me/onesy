import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMovingW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='MovingW100Filled'

      short_name='Moving'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M821-646 598-424q-28 27-67 27.5T465-423l-47-47q-20-20-46.5-19.5T325-470L141-286q-4 4-9.5 4.5T121-286q-5-5-5-10t5-10l184-184q28-27 66.5-27.5T438-490l46 46q20 20 47 19.5t47-19.5l223-222H675q-6 0-10-4t-4-10q0-6 4-10t10-4h144q13 0 21.5 8.5T849-664v144q0 6-4 10t-10 4q-6 0-10-4t-4-10v-126Z"/>
    </Icon>
  );
});

IconMaterialMovingW100Filled.displayName = 'OnesyIconMaterialMovingW100Filled';

export default IconMaterialMovingW100Filled;
