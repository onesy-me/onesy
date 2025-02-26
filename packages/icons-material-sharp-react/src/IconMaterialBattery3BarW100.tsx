import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery3BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery3BarW100'

      short_name='Battery3Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v643H326Zm28-268h252v-348H354v348Z"/>
    </Icon>
  );
});

IconMaterialBattery3BarW100.displayName = 'OnesyIconMaterialBattery3BarW100';

export default IconMaterialBattery3BarW100;
