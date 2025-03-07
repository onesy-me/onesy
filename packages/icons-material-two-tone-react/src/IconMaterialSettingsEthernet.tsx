import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsEthernet = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsEthernet'

      short_name='SettingsEthernet'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7.77 6.76L6.23 5.48.82 12l5.41 6.52 1.54-1.28L3.42 12l4.35-5.24zM7 13h2v-2H7v2zm10-2h-2v2h2v-2zm-6 2h2v-2h-2v2zm6.77-7.52l-1.54 1.28L20.58 12l-4.35 5.24 1.54 1.28L23.18 12l-5.41-6.52z"/>
    </Icon>
  );
});

IconMaterialSettingsEthernet.displayName = 'OnesyIconMaterialSettingsEthernet';

export default IconMaterialSettingsEthernet;
