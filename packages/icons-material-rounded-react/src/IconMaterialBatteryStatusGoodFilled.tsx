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
      <path d="m638-226 113-113q12-12 28-12t28 12q12 12 12 28.5T807-282L666-141q-12 12-28.5 12T609-141l-56-57q-12-12-12-28t12-28q12-12 28-11.5t28 11.5l29 28ZM320-80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v253q0 11-8 19.5t-19 9.5q-42 5-78 22.5T511-410q-32 32-51.5 75.5T440-240q0 30 7 58t21 54q8 17 0 32.5T443-80H320Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGoodFilled.displayName = 'OnesyIconMaterialBatteryStatusGoodFilled';

export default IconMaterialBatteryStatusGoodFilled;
