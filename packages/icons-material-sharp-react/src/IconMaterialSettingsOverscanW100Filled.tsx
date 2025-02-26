import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsOverscanW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanW100Filled'

      short_name='SettingsOverscan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-420v-120l-60 60 60 60Zm208 128 60-60H420l60 60Zm-60-316h120l-60-60-60 60Zm268 188 60-60-60-60v120ZM132-212v-536h696v536H132Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanW100Filled.displayName = 'OnesyIconMaterialSettingsOverscanW100Filled';

export default IconMaterialSettingsOverscanW100Filled;
