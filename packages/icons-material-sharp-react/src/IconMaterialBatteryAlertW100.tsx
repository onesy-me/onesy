import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBatteryAlertW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BatteryAlertW100'

      short_name='BatteryAlert'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M326-132v-643h90v-53h128v53h90v643H326Zm28-28h252v-588H354v588Zm0 0h252-252Zm112-252h28v-188h-28v188Zm13.96 104q11.04 0 18.54-7.46 7.5-7.47 7.5-18.5 0-11.04-7.46-18.54-7.47-7.5-18.5-7.5-11.04 0-18.54 7.46-7.5 7.47-7.5 18.5 0 11.04 7.46 18.54 7.47 7.5 18.5 7.5Z"/>
    </Icon>
  );
});

IconMaterialBatteryAlertW100.displayName = 'OnesyIconMaterialBatteryAlertW100';

export default IconMaterialBatteryAlertW100;
