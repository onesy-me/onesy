import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifi2BarLockedFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifi2BarLockedFilled'

      short_name='NetworkWifi2BarLocked'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-120 0-600q95-97 219.5-148.5T480-800q137 0 261 51t219 149L859-499q-22-10-45.5-15t-47.5-6l78-78q-79-60-172-91t-192-31q-99 0-192 31t-172 91l172 172q44-26 92.5-40t99.5-14q31 0 61.5 6.5T601-459q-38 35-59.5 81.5T520-279q0 26 5 50.5t16 47.5l-61 61Zm160 0v-200h40v-40q0-33 23.5-56.5T760-440q33 0 56.5 23.5T840-360v40h40v200H640Zm80-200h80v-40q0-17-11.5-28.5T760-400q-17 0-28.5 11.5T720-360v40Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifi2BarLockedFilled.displayName = 'OnesyIconMaterialNetworkWifi2BarLockedFilled';

export default IconMaterialNetworkWifi2BarLockedFilled;
