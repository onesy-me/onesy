import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialYourTrips = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='YourTrips'

      short_name='YourTrips'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-240h320v-80H320v80ZM200-80v-400q0-85 44.5-152T360-732v-28q0-50 35-85t85-35q50 0 85 35t35 85v28q71 33 115.5 100T760-480v400H200Zm80-80h400v-320q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480v320Zm160-596q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v4ZM280-160h400-400Zm126-220 74-56 74 56-28-91 74-53h-91l-29-96-29 96h-91l74 53-28 91Z"/>
    </Icon>
  );
});

IconMaterialYourTrips.displayName = 'OnesyIconMaterialYourTrips';

export default IconMaterialYourTrips;
