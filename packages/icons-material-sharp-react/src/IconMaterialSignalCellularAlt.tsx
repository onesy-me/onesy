import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularAlt = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularAlt'

      short_name='SignalCellularAlt'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-160v-240h120v240H200Zm240 0v-440h120v440H440Zm240 0v-640h120v640H680Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularAlt.displayName = 'OnesyIconMaterialSignalCellularAlt';

export default IconMaterialSignalCellularAlt;
