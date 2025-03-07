import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceUnknownW100 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceUnknownW100'

      short_name='DeviceUnknown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M479.93-303q-8.93 0-15.43-6.57t-6.5-15.5q0-8.93 6.57-15.43t15.5-6.5q8.93 0 15.43 6.57t6.5 15.5q0 8.93-6.57 15.43t-15.5 6.5ZM466-409q0-26 10.5-46.5T512-499q17-16 27.5-30t10.5-35.37Q550-587 533-606q-17-19-53-19-28.96 0-43.98 13Q421-599 412-581l-26-10q12-27 35.31-44.5Q444.63-653 480-653q42 0 70 24t28 65q0 23-9.5 39.5t-26.75 33.75Q513-462 504.5-447T494-409h-28ZM252-92v-776h456v776H252Zm28-94v66h400v-66H280Zm0-28h400v-532H280v532Zm0-560h400v-66H280v66Zm0 0v-66 66Zm0 588v66-66Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknownW100.displayName = 'OnesyIconMaterialDeviceUnknownW100';

export default IconMaterialDeviceUnknownW100;
