import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryErrorW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryErrorW100'

      short_name='BatteryError'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v325q-8 3-14.5 6.5T606-436v-312H354v588h150q2 8 5 14.5t6 13.5H326Zm28-28Zm287 28-19-19 84-84-84-84 19-19 84 84 84-84 19 19-83 84 83 84-19 19-84-83-84 83Z"/>
    </Icon>
  );
});

IconMaterialBatteryErrorW100.displayName = 'OnesyIconMaterialBatteryErrorW100';

export default IconMaterialBatteryErrorW100;
