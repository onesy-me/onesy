import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery6Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery6Bar'

      short_name='Battery6Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-560h240v-80H360v80Z"/>
    </Icon>
  );
});

IconMaterialBattery6Bar.displayName = 'OnesyIconMaterialBattery6Bar';

export default IconMaterialBattery6Bar;
