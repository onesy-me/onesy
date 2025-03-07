import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBookmarkManager = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BookmarkManager'

      short_name='BookmarkManager'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-240v-480 480Zm0 80q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h207q16 0 30.5 6t25.5 17l57 57h320q33 0 56.5 23.5T880-640v80q0 17-11.5 28.5T840-520q-17 0-28.5-11.5T800-560v-80H447l-80-80H160v480h280q17 0 28.5 11.5T480-200q0 17-11.5 28.5T440-160H160Zm400 40v-66q0-8 3-15.5t9-13.5l209-208q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L695-92q-6 6-13.5 9T666-80h-66q-17 0-28.5-11.5T560-120Zm300-223-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z"/>
    </Icon>
  );
});

IconMaterialBookmarkManager.displayName = 'OnesyIconMaterialBookmarkManager';

export default IconMaterialBookmarkManager;
