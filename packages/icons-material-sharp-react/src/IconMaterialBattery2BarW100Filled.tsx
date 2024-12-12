import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery2BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery2BarW100Filled'

      short_name='Battery2Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v643H326Zm28-188h252v-428H354v428Z"/>
    </Icon>
  );
});

IconMaterialBattery2BarW100Filled.displayName = 'OnesyIconMaterialBattery2BarW100Filled';

export default IconMaterialBattery2BarW100Filled;
