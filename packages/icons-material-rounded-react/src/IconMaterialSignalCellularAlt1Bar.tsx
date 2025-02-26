import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAlt1Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt1Bar'

      short_name='SignalCellularAlt1Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M260-160q-25 0-42.5-17.5T200-220v-120q0-25 17.5-42.5T260-400q25 0 42.5 17.5T320-340v120q0 25-17.5 42.5T260-160Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt1Bar.displayName = 'OnesyIconMaterialSignalCellularAlt1Bar';

export default IconMaterialSignalCellularAlt1Bar;
