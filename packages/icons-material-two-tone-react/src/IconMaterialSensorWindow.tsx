import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSensorWindow = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SensorWindow'

      short_name='SensorWindow'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/><path d="M18,4v7h-4v-1h-4v1H6V4H18z M6,20v-7h12v7H6z" opacity=".3"/><path d="M18,2H6C4.9,2,4,2.9,4,4v16c0,1.1,0.9,2,2,2h12c1.1,0,2-0.9,2-2V4C20,2.9,19.1,2,18,2z M18,4v7h-4v-1h-4v1H6V4H18z M6,20 v-7h12v7H6z"/></g>
    </Icon>
  );
});

IconMaterialSensorWindow.displayName = 'OnesyIconMaterialSensorWindow';

export default IconMaterialSensorWindow;
