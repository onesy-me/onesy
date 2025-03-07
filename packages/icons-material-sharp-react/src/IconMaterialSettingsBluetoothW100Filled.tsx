import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsBluetoothW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsBluetoothW100Filled'

      short_name='SettingsBluetooth'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-12q-11 0-19.5-8.5T292-40q0-11 8.5-19.5T320-68q11 0 19.5 8.5T348-40q0 11-8.5 19.5T320-12Zm160 0q-11 0-19.5-8.5T452-40q0-11 8.5-19.5T480-68q11 0 19.5 8.5T508-40q0 11-8.5 19.5T480-12Zm160 0q-11 0-19.5-8.5T612-40q0-11 8.5-19.5T640-68q11 0 19.5 8.5T668-40q0 11-8.5 19.5T640-12ZM466-196v-330L256-316l-20-20 224-224-224-224 20-20 210 210v-330h14l192 192-172 172 172 172-192 192h-14Zm28-54 138-138-138-138v276Zm0-344 138-138-138-138v276Z"/>
    </Icon>
  );
});

IconMaterialSettingsBluetoothW100Filled.displayName = 'OnesyIconMaterialSettingsBluetoothW100Filled';

export default IconMaterialSettingsBluetoothW100Filled;
