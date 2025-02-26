import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAlt2BarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt2BarFilled'

      short_name='SignalCellularAlt2Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-240h120v240H200Zm240 0v-440h120v440H440Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt2BarFilled.displayName = 'OnesyIconMaterialSignalCellularAlt2BarFilled';

export default IconMaterialSignalCellularAlt2BarFilled;
