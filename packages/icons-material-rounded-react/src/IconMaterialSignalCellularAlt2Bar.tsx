import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAlt2Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt2Bar'

      short_name='SignalCellularAlt2Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-160q-25 0-42.5-17.5T200-220v-120q0-25 17.5-42.5T260-400q25 0 42.5 17.5T320-340v120q0 25-17.5 42.5T260-160Zm240 0q-25 0-42.5-17.5T440-220v-320q0-25 17.5-42.5T500-600q25 0 42.5 17.5T560-540v320q0 25-17.5 42.5T500-160Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt2Bar.displayName = 'OnesyIconMaterialSignalCellularAlt2Bar';

export default IconMaterialSignalCellularAlt2Bar;
