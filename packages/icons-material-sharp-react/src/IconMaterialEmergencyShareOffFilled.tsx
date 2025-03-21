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
      <path d="M735-774q-51-51-117-78.5T480-880q-59 0-113.5 18T265-809l-57-57q58-46 127.5-70T480-960q88 0 168 33t143 96l-56 57ZM622-662q-29-29-65.5-43.5T480-720q-26 0-51.5 6.5T380-694l-58-57q35-23 75-36t83-13q56 0 107 21t91 61l-56 56Zm98 310L473-600h7q101 0 170.5 72T720-354v2Zm128 240-56 56-133-133q-30 45-74.5 91.5T480 0Q359-103 299.5-191T240-354q0-56 23-104.5t61-82.5h95l241 241H548L56-792l56-56 736 736ZM480-300q25 0 42.5-17.5T540-360q0-12-4.5-23t-13-19.5q-8.5-8.5-19.5-13t-23-4.5q-25 0-42.5 17.5T420-360q0 25 17.5 42.5T480-300Z"/>
    </Icon>
  );
});

IconMaterialEmergencyShareOffFilled.displayName = 'OnesyIconMaterialEmergencyShareOffFilled';

export default IconMaterialEmergencyShareOffFilled;
