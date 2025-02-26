import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryStatusGoodFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGoodFilled'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M638-113 524-226l57-56 57 56 141-141 57 56-198 198ZM280-80v-720h120v-80h160v80h120v320q-8 0-16 .5t-16 1.5q-88 12-148 79t-60 159q0 45 16 86t45 74H280Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGoodFilled.displayName = 'OnesyIconMaterialBatteryStatusGoodFilled';

export default IconMaterialBatteryStatusGoodFilled;
