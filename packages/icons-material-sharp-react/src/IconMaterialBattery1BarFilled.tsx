import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBattery1BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Battery1BarFilled'

      short_name='Battery1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M280-80v-720h120v-80h160v80h120v720H280Zm80-160h240v-480H360v480Z"/>
    </Icon>
  );
});

IconMaterialBattery1BarFilled.displayName = 'OnesyIconMaterialBattery1BarFilled';

export default IconMaterialBattery1BarFilled;
