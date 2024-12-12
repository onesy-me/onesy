import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAltW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAltW100'

      short_name='SignalCellularAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M252-212v-136h48v136h-48Zm230 0v-336h48v336h-48Zm218 0v-536h48v536h-48Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAltW100.displayName = 'OnesyIconMaterialSignalCellularAltW100';

export default IconMaterialSignalCellularAltW100;
