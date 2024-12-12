import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery1BarW100Filled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery1BarW100Filled'

      short_name='Battery1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v643H326Zm28-108h252v-508H354v508Z"/>
    </Icon>
  );
});

IconMaterialBattery1BarW100Filled.displayName = 'OnesyIconMaterialBattery1BarW100Filled';

export default IconMaterialBattery1BarW100Filled;
