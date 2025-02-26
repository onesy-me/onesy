import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSettingsOverscanW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SettingsOverscanW100'

      short_name='SettingsOverscan'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M272-420v-120l-60 60 60 60Zm208 128 60-60H420l60 60Zm-60-316h120l-60-60-60 60Zm268 188 60-60-60-60v120ZM132-212v-536h696v536H132Zm28-28h640v-480H160v480Zm0 0v-480 480Z"/>
    </Icon>
  );
});

IconMaterialSettingsOverscanW100.displayName = 'OnesyIconMaterialSettingsOverscanW100';

export default IconMaterialSettingsOverscanW100;
