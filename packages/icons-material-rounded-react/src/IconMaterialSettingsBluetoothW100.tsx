import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsBluetoothW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBluetoothW100'

      short_name='SettingsBluetooth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M466-526 266-326q-4 4-9.5 4.5T246-326q-5-5-5-10t5-10l214-214-214-214q-4-4-4.5-9.5T246-794q5-5 10-5t10 5l200 200v-272q0-14 9.5-22t20.5-8q5 0 10.5 2t10.5 7l134 134q5 5 7 10t2 11q0 6-2 11t-7 10L500-560l151 151q5 5 7 10t2 11q0 6-2 11t-7 10L517-233q-5 5-10.5 7t-10.5 2q-11 0-20.5-8t-9.5-22v-272Zm28 276 138-138-138-138v276Zm0-344 138-138-138-138v276ZM320-12q-11 0-19.5-8.5T292-40q0-11 8.5-19.5T320-68q11 0 19.5 8.5T348-40q0 11-8.5 19.5T320-12Zm160 0q-11 0-19.5-8.5T452-40q0-11 8.5-19.5T480-68q11 0 19.5 8.5T508-40q0 11-8.5 19.5T480-12Zm160 0q-11 0-19.5-8.5T612-40q0-11 8.5-19.5T640-68q11 0 19.5 8.5T668-40q0 11-8.5 19.5T640-12Z"/>
    </Icon>
  );
});

IconMaterialSettingsBluetoothW100.displayName = 'OnesyIconMaterialSettingsBluetoothW100';

export default IconMaterialSettingsBluetoothW100;
