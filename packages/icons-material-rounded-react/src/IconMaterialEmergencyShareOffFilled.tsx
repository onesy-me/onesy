import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEmergencyShareOffFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EmergencyShareOffFilled'

      short_name='EmergencyShareOff'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M720-352 473-600h7q101 0 170.5 72T720-354v2ZM820-84q-11 11-28 11t-28-11L659-189q-32 48-71 87.5T507-24q-6 5-12.5 7.5T480-14q-8 0-14.5-2.5T453-24q-33-29-70-66.5t-69-80q-32-42.5-53-89T240-354q0-56 23-104.5t61-82.5h95l241 241H548L84-764q-11-11-11-28t11-28q11-11 28-11t28 11l680 680q11 11 11 28t-11 28ZM480-300q25 0 42.5-17.5T540-360q0-12-4.5-23t-13-19.5q-8.5-8.5-19.5-13t-23-4.5q-25 0-42.5 17.5T420-360q0 25 17.5 42.5T480-300Zm0-580q-59 0-113.5 18T265-809l-57-57q58-46 127.5-70T480-960q78 0 149.5 26T760-859q13 11 14 28t-11 29q-11 12-28 12t-30-11q-48-38-105.5-58.5T480-880Zm0 160q-26 0-51.5 6.5T380-694l-58-57q35-23 75-36t83-13q46 0 89 14.5t79 41.5q13 10 13.5 26T650-690q-11 11-28 11.5t-31-8.5q-25-17-53-25t-58-8Z"/>
    </Icon>
  );
});

IconMaterialEmergencyShareOffFilled.displayName = 'OnesyIconMaterialEmergencyShareOffFilled';

export default IconMaterialEmergencyShareOffFilled;
