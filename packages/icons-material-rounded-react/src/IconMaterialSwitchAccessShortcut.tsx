import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSwitchAccessShortcut = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SwitchAccessShortcut'

      short_name='SwitchAccessShortcut'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M520-748q-57 51-88.5 119.5T400-484q0 91 43.5 170.5T565-186q14 9 19.5 24.5T582-131q-8 15-23 20.5t-29-2.5q-98-59-154-157.5T320-484q0-91 36-172.5T458-800h-98q-17 0-28.5-11.5T320-840q0-17 11.5-28.5T360-880h200q17 0 28.5 11.5T600-840v200q0 17-11.5 28.5T560-600q-17 0-28.5-11.5T520-640v-108Z"/>
    </Icon>
  );
});

IconMaterialSwitchAccessShortcut.displayName = 'OnesyIconMaterialSwitchAccessShortcut';

export default IconMaterialSwitchAccessShortcut;
