import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularConnectedNoInternet4Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularConnectedNoInternet4Bar'

      short_name='SignalCellularConnectedNoInternet4Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v240H720v560H80Zm720-160v-320h80v320h-80Zm0 160v-80h80v80h-80Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularConnectedNoInternet4Bar.displayName = 'OnesyIconMaterialSignalCellularConnectedNoInternet4Bar';

export default IconMaterialSignalCellularConnectedNoInternet4Bar;
