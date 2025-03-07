import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsCellW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsCellW100'

      short_name='SettingsCell'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-12q-11 0-19.5-8.5T292-40q0-11 8.5-19.5T320-68q11 0 19.5 8.5T348-40q0 11-8.5 19.5T320-12Zm160 0q-11 0-19.5-8.5T452-40q0-11 8.5-19.5T480-68q11 0 19.5 8.5T508-40q0 11-8.5 19.5T480-12Zm160 0q-11 0-19.5-8.5T612-40q0-11 8.5-19.5T640-68q11 0 19.5 8.5T668-40q0 11-8.5 19.5T640-12ZM342-212q-26 0-43-17t-17-43v-576q0-26 17-43t43-17h276q26 0 43 17t17 43v576q0 26-17 43t-43 17H342Zm0-28h276q14 0 23-9t9-23v-34H310v34q0 14 9 23t23 9Zm-32-94h340v-452H310v452Zm0-480h340v-34q0-14-9-23t-23-9H342q-14 0-23 9t-9 23v34Zm0 0v-66 66Zm0 574v-66 66Z"/>
    </Icon>
  );
});

IconMaterialSettingsCellW100.displayName = 'OnesyIconMaterialSettingsCellW100';

export default IconMaterialSettingsCellW100;
