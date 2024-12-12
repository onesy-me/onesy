import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery4BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery4BarW100Filled'

      short_name='Battery4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M354-480h252v-268H354v268Zm-28 348v-643h90v-53h128v53h90v643H326Z"/>
    </Icon>
  );
});

IconMaterialBattery4BarW100Filled.displayName = 'OnesyIconMaterialBattery4BarW100Filled';

export default IconMaterialBattery4BarW100Filled;
