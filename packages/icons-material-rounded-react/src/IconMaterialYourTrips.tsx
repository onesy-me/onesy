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
      <path d="M360-240h240q17 0 28.5-11.5T640-280q0-17-11.5-28.5T600-320H360q-17 0-28.5 11.5T320-280q0 17 11.5 28.5T360-240ZM280-80q-33 0-56.5-23.5T200-160v-320q0-85 44.5-152T360-732v-28q0-50 35-85t85-35q50 0 85 35t35 85v28q71 33 115.5 100T760-480v320q0 33-23.5 56.5T680-80H280Zm0-80h400v-320q0-83-58.5-141.5T480-680q-83 0-141.5 58.5T280-480v320Zm160-596q11-2 20-3t20-1q11 0 20 1t20 3v-4q0-17-11.5-28.5T480-800q-17 0-28.5 11.5T440-760v4ZM280-160h400-400Zm200-276 49 37q6 5 12 .5t4-11.5l-19-61 49-35q6-5 4-11.5t-10-6.5h-60l-19-65q-2-7-10-7t-10 7l-19 65h-60q-8 0-10 6.5t4 11.5l49 35-19 61q-2 7 4 11.5t12-.5l49-37Z"/>
    </Icon>
  );
});

IconMaterialYourTrips.displayName = 'OnesyIconMaterialYourTrips';

export default IconMaterialYourTrips;
