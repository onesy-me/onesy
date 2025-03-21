import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryErrorW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryErrorW100Filled'

      short_name='BatteryError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M356-132q-13 0-21.5-8.5T326-162v-583q0-13 8.5-21.5T356-775h60v-23q0-13 8.5-21.5T446-828h68q13 0 21.5 8.5T544-798v23h60q13 0 21.5 8.5T634-745v277q0 8-4.5 15T617-442q-58 30-91.5 85.5T492-235q0 17 2 34t7 34q4 13-3 24t-20 11H356Zm369-83-75 74q-4 4-9 3.5t-9-4.5q-4-4-4-9.5t4-9.5l74-74-75-75q-4-4-3.5-9.5t4.5-9.5q4-4 9.5-4t9.5 4l74 75 75-75q4-4 9.5-3.5t9.5 4.5q4 4 4 9t-4 9l-74 75 74 75q4 4 3.5 9.5T818-141q-4 4-9 4t-9-4l-75-74Z"/>
    </Icon>
  );
});

IconMaterialBatteryErrorW100Filled.displayName = 'OnesyIconMaterialBatteryErrorW100Filled';

export default IconMaterialBatteryErrorW100Filled;
