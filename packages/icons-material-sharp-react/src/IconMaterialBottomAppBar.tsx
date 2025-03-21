import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomAppBar = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomAppBar'

      short_name='BottomAppBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-120v-720h720v720H120Zm80-200v120h560v-120H568q-17 18-39.5 29T480-280q-26 0-48.5-11T392-320H200Zm280-40q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-280-40h160q0-50 35-85t85-35q50 0 85 35t35 85h160v-360H200v360Zm0 200h560-560Z"/>
    </Icon>
  );
});

IconMaterialBottomAppBar.displayName = 'OnesyIconMaterialBottomAppBar';

export default IconMaterialBottomAppBar;
