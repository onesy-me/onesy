import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchRightW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchRightW100'

      short_name='SwitchRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M400-279 199-480l201-201v402Zm160 0v-402l201 201-201 201Zm28-67 134-134-134-134v268Z"/>
    </Icon>
  );
});

IconMaterialSwitchRightW100.displayName = 'OnesyIconMaterialSwitchRightW100';

export default IconMaterialSwitchRightW100;
