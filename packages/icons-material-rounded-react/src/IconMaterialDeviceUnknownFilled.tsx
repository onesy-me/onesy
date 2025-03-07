import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDeviceUnknownFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DeviceUnknownFilled'

      short_name='DeviceUnknown'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-280q-17 0-29.5-12.5T438-322q0-17 12.5-29.5T480-364q17 0 29.5 12.5T522-322q0 17-12.5 29.5T480-280Zm-91-307q-10-5-13-16.5t4-21.5q17-26 43.5-40.5T480-680q48 0 81 27.5t33 74.5q0 25-12.5 46T552-494q-13 13-25.5 26T511-437q-2 12-10.5 20.5T480-408q-12 0-20.5-8t-8.5-20q0-25 15-45t34-37q13-13 23.5-27t10.5-31q0-20-16.5-33T480-622q-14 0-27.5 6.5T431-597q-8 11-19.5 13.5T389-587ZM280-40q-33 0-56.5-23.5T200-120v-720q0-33 23.5-56.5T280-920h400q33 0 56.5 23.5T760-840v720q0 33-23.5 56.5T680-40H280Zm0-200h400v-480H280v480Z"/>
    </Icon>
  );
});

IconMaterialDeviceUnknownFilled.displayName = 'OnesyIconMaterialDeviceUnknownFilled';

export default IconMaterialDeviceUnknownFilled;
