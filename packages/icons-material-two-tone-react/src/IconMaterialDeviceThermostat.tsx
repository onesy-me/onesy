import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceThermostat = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceThermostat'

      short_name='DeviceThermostat'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M15,13V5c0-1.66-1.34-3-3-3S9,3.34,9,5v8c-1.21,0.91-2,2.37-2,4c0,2.76,2.24,5,5,5s5-2.24,5-5C17,15.37,16.21,13.91,15,13 z M11,11V5c0-0.55,0.45-1,1-1s1,0.45,1,1v1h-1v1h1v1v1h-1v1h1v1H11z"/></g></g>
    </Icon>
  );
});

IconMaterialDeviceThermostat.displayName = 'OnesyIconMaterialDeviceThermostat';

export default IconMaterialDeviceThermostat;
