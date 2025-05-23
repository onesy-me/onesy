import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsBluetooth = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBluetooth'

      short_name='SettingsBluetooth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M440-464 284-308q-11 11-28 11t-28-11q-11-11-11-28t11-28l196-196-196-196q-11-11-11-28t11-28q11-11 28-11t28 11l156 156v-247q0-18 12-29.5t28-11.5q8 0 15 3t13 9l172 172q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L536-560l144 144q6 6 8.5 13t2.5 15q0 8-2.5 15t-8.5 13L508-188q-6 6-13 9t-15 3q-16 0-28-11.5T440-217v-247Zm80 150 76-74-76-76v150Zm0-342 76-76-76-74v150ZM320 0q-17 0-28.5-11.5T280-40q0-17 11.5-28.5T320-80q17 0 28.5 11.5T360-40q0 17-11.5 28.5T320 0Zm160 0q-17 0-28.5-11.5T440-40q0-17 11.5-28.5T480-80q17 0 28.5 11.5T520-40q0 17-11.5 28.5T480 0Zm160 0q-17 0-28.5-11.5T600-40q0-17 11.5-28.5T640-80q17 0 28.5 11.5T680-40q0 17-11.5 28.5T640 0Z"/>
    </Icon>
  );
});

IconMaterialSettingsBluetooth.displayName = 'OnesyIconMaterialSettingsBluetooth';

export default IconMaterialSettingsBluetooth;
