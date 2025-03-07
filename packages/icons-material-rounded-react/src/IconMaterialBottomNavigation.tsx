import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomNavigation = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomNavigation'

      short_name='BottomNavigation'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-240h560v-400H200v400Zm0 80v80h560v-80H200Zm0 0v80-80Z"/>
    </Icon>
  );
});

IconMaterialBottomNavigation.displayName = 'OnesyIconMaterialBottomNavigation';

export default IconMaterialBottomNavigation;
