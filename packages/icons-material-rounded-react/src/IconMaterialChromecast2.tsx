import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialChromecast2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Chromecast2'

      short_name='Chromecast2'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M360-120q-117 0-198.5-81.5T80-400q0-106 68.5-184.5T320-677v-55q0-62 43-105t105-43q34 0 64.5 15t51.5 41l207 261q12-5 25-2.5t22 13.5l61 77q11 13 8.5 29T892-419l-47 37q-13 11-29 9t-27-15l-60-77q-9-11-9-24.5t8-24.5L521-775q-10-12-23.5-18.5T468-800q-29 0-48.5 19.5T400-732v55q103 14 171.5 92.5T640-400q0 117-81.5 198.5T360-120Zm0-80q83 0 141.5-58.5T560-400q0-83-58.5-141.5T360-600q-83 0-141.5 58.5T160-400q0 83 58.5 141.5T360-200Z"/>
    </Icon>
  );
});

IconMaterialChromecast2.displayName = 'OnesyIconMaterialChromecast2';

export default IconMaterialChromecast2;
