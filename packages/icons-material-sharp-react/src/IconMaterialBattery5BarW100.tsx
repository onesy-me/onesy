import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery5BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery5BarW100'

      short_name='Battery5Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v643H326Zm28-428h252v-188H354v188Z"/>
    </Icon>
  );
});

IconMaterialBattery5BarW100.displayName = 'OnesyIconMaterialBattery5BarW100';

export default IconMaterialBattery5BarW100;
