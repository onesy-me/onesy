import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSignalWifiStatusbarNotConnected = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SignalWifiStatusbarNotConnected'

      short_name='SignalWifiStatusbarNotConnected'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><g><g><path d="M18.52,15.16c0.41-0.73,1.18-1.16,1.63-1.8c0.48-0.68,0.21-1.94-1.14-1.94c-0.88,0-1.32,0.67-1.5,1.23l-1.37-0.57 c0.37-1.12,1.38-2.08,2.86-2.08c1.23,0,2.08,0.56,2.51,1.26c0.37,0.6,0.58,1.73,0.01,2.57c-0.63,0.93-1.23,1.21-1.56,1.81 c-0.13,0.24-0.18,0.4-0.18,1.18h-1.52C18.26,16.41,18.19,15.74,18.52,15.16z M17.95,18.95c0-0.59,0.47-1.04,1.05-1.04 c0.59,0,1.04,0.45,1.04,1.04c0,0.58-0.44,1.05-1.04,1.05C18.42,20,17.95,19.53,17.95,18.95z"/></g></g><path d="M14,13c0-2.76,2.24-5,5-5c1.63,0,3.07,0.79,3.98,2L24,8.98C20.93,5.9,16.69,4,12,4 C7.31,4,3.07,5.9,0,8.98L12,21l4.01-4.02C14.8,16.07,14,14.63,14,13z" fillOpacity=".3"/></g></g>
    </Icon>
  );
});

IconMaterialSignalWifiStatusbarNotConnected.displayName = 'OnesyIconMaterialSignalWifiStatusbarNotConnected';

export default IconMaterialSignalWifiStatusbarNotConnected;
