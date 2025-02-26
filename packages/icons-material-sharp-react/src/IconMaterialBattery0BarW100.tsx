import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery0BarW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery0BarW100'

      short_name='Battery0Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v643H326Zm28-28h252v-588H354v588Z"/>
    </Icon>
  );
});

IconMaterialBattery0BarW100.displayName = 'OnesyIconMaterialBattery0BarW100';

export default IconMaterialBattery0BarW100;
