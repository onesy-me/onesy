import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularPauseFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularPauseFilled'

      short_name='SignalCellularPause'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v440H520v360H80Zm680 0v-280h80v280h-80Zm-160 0v-280h80v280h-80Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularPauseFilled.displayName = 'OnesyIconMaterialSignalCellularPauseFilled';

export default IconMaterialSignalCellularPauseFilled;
