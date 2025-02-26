import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery3Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery3Bar'

      short_name='Battery3Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-320h240v-320H360v320Z"/>
    </Icon>
  );
});

IconMaterialBattery3Bar.displayName = 'OnesyIconMaterialBattery3Bar';

export default IconMaterialBattery3Bar;
