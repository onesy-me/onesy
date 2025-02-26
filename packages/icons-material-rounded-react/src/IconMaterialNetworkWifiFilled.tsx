import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialNetworkWifiFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='NetworkWifiFilled'

      short_name='NetworkWifi'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M174-540q67-48 145-74t161-26q83 0 161 26t145 74l58-58q-79-60-172-91t-192-31q-99 0-192 31t-172 91l58 58Zm249 363L61-539q-12-12-18-27t-6-30q0-17 7-32.5T65-656q82-71 195-107.5T480-800q107 0 220 36.5T895-656q14 12 21 27.5t7 32.5q0 15-6 30t-18 27L537-177q-12 12-27 18t-30 6q-15 0-30-6t-27-18Z"/>
    </Icon>
  );
});

IconMaterialNetworkWifiFilled.displayName = 'OnesyIconMaterialNetworkWifiFilled';

export default IconMaterialNetworkWifiFilled;
