import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalCellularOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalCellularOff'

      short_name='SignalCellularOff'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 1l-8.31 8.31 8.31 8.3zM4.91 4.36L3.5 5.77l6.36 6.37L1 21h17.73l2 2 1.41-1.41z"/>
    </Icon>
  );
});

IconMaterialSignalCellularOff.displayName = 'OnesyIconMaterialSignalCellularOff';

export default IconMaterialSignalCellularOff;
