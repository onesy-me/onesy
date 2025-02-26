import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularConnectedNoInternet0Bar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularConnectedNoInternet0Bar'

      short_name='SignalCellularConnectedNoInternet0Bar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m80-80 800-800v240h-80v-47L273-160h447v80H80Zm720-160v-320h80v320h-80Zm80 80v80h-80v-80h80Z"/>
    </Icon>
  );
});

IconMaterialSignalCellularConnectedNoInternet0Bar.displayName = 'OnesyIconMaterialSignalCellularConnectedNoInternet0Bar';

export default IconMaterialSignalCellularConnectedNoInternet0Bar;
