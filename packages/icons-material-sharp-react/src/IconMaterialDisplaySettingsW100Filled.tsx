import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDisplaySettingsW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DisplaySettingsW100Filled'

      short_name='DisplaySettings'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-402h28v-108h-28v40h-60v28h60v40Zm68-40h300v-28H394v28Zm212-88h28v-40h60v-28h-60v-40h-28v108Zm-340-40h300v-28H266v28Zm106 398v-80H132v-536h696v536H588v80H372Z"/>
    </Icon>
  );
});

IconMaterialDisplaySettingsW100Filled.displayName = 'OnesyIconMaterialDisplaySettingsW100Filled';

export default IconMaterialDisplaySettingsW100Filled;
