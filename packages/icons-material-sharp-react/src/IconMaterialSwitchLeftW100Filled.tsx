import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchLeftW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchLeftW100Filled'

      short_name='SwitchLeft'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-279 199-480l201-201v402Zm-28-67v-268L238-480l134 134Zm188 67v-402l201 201-201 201Z"/>
    </Icon>
  );
});

IconMaterialSwitchLeftW100Filled.displayName = 'OnesyIconMaterialSwitchLeftW100Filled';

export default IconMaterialSwitchLeftW100Filled;
