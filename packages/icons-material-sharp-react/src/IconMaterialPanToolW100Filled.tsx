import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialPanToolW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='PanToolW100Filled'

      short_name='PanTool'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M397-118 127-514l28-28 177 123v-340h28v253h115v-333h28v333h115v-293h28v293h114v-242h28v630H397Z"/>
    </Icon>
  );
});

IconMaterialPanToolW100Filled.displayName = 'OnesyIconMaterialPanToolW100Filled';

export default IconMaterialPanToolW100Filled;
