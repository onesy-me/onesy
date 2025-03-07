import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryStatusGood = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryStatusGood'

      short_name='BatteryStatusGood'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m638-226 113-113q12-12 28-12t28 12q12 12 12 28.5T807-282L666-141q-12 12-28.5 12T609-141l-56-57q-12-12-12-28t12-28q12-12 28-11.5t28 11.5l29 28Zm-278 66Zm-40 80q-17 0-28.5-11.5T280-120v-640q0-17 11.5-28.5T320-800h80v-40q0-17 11.5-28.5T440-880h80q17 0 28.5 11.5T560-840v40h80q17 0 28.5 11.5T680-760v240q0 17-11.5 28.5T640-480q-17 0-28.5-11.5T600-520v-200H360v560h101q17 0 28.5 11.5T501-120q0 17-11.5 28.5T461-80H320Z"/>
    </Icon>
  );
});

IconMaterialBatteryStatusGood.displayName = 'OnesyIconMaterialBatteryStatusGood';

export default IconMaterialBatteryStatusGood;
