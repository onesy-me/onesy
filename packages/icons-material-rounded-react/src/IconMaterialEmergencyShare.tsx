import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyShare = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyShare'

      short_name='EmergencyShare'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-107q75-71 117.5-136.5T640-354q0-69-46.5-117.5T480-520q-67 0-113.5 48.5T320-354q0 45 42.5 110.5T480-107Zm0-493q101 0 170.5 72T720-354q0 34-13 71t-38.5 77.5Q643-165 606-122.5T520-35q-8 8-18.5 11.5T480-20q-11 0-21.5-3.5T440-35q-49-45-86-87.5t-62.5-83Q266-246 253-283t-13-71q0-102 69.5-174T480-600Zm0 300q25 0 42.5-17.5T540-360q0-25-17.5-42.5T480-420q-25 0-42.5 17.5T420-360q0 25 17.5 42.5T480-300Zm0-420q-30 0-58 8t-53 25q-14 9-31 8.5T310-690q-12-12-11.5-28t13.5-26q36-27 79-41.5t89-14.5q46 0 89 14.5t79 41.5q13 10 13.5 26T650-690q-11 11-28 11.5t-31-8.5q-25-17-53-25t-58-8Zm0-160q-62 0-119 20t-105 58q-13 11-30 10.5T197-803q-12-12-11-28.5t14-27.5q59-49 130.5-75T480-960q78 0 149.5 26T760-859q13 11 14 28t-11 29q-11 12-28 12t-30-11q-48-38-105.5-58.5T480-880Zm0 520Z"/>
    </Icon>
  );
});

IconMaterialEmergencyShare.displayName = 'OnesyIconMaterialEmergencyShare';

export default IconMaterialEmergencyShare;
