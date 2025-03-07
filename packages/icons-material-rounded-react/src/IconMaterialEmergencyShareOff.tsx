import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyShareOff = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyShareOff'

      short_name='EmergencyShareOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M480-880q-59 0-113.5 18T265-809l-57-57q58-46 127.5-70T480-960q78 0 149.5 26T760-859q13 11 14 28t-11 29q-11 12-28 12t-30-11q-48-38-105.5-58.5T480-880Zm0 160q-26 0-51.5 6.5T380-694l-58-57q35-23 75-36t83-13q46 0 89 14.5t79 41.5q13 10 13.5 26T650-690q-11 11-28 11.5t-31-8.5q-25-17-53-25t-58-8Zm240 368L473-600h7q101 0 170.5 72T720-354v2ZM600-248 372-476q-24 23-38 54.5T320-354q0 45 42.5 110.5T480-107q39-37 69-72.5t51-68.5ZM480-14q-8 0-14.5-2.5T453-24q-33-29-70-66.5t-69-80q-32-42.5-53-89T240-354q0-53 20-99t55-80L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28q-11 11-28 11t-28-11L659-189q-32 48-71 87.5T507-24q-6 5-12.5 7.5T480-14Zm0-286q-25 0-42.5-17.5T420-360q0-25 17.5-42.5T480-420q12 0 23 4.5t19.5 13q8.5 8.5 13 19.5t4.5 23q0 25-17.5 42.5T480-300Zm-20 8Z"/>
    </Icon>
  );
});

IconMaterialEmergencyShareOff.displayName = 'OnesyIconMaterialEmergencyShareOff';

export default IconMaterialEmergencyShareOff;
