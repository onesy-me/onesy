import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialBottomAppBarFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='BottomAppBarFilled'

      short_name='BottomAppBar'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm280-240q17 0 28.5-11.5T520-400q0-17-11.5-28.5T480-440q-17 0-28.5 11.5T440-400q0 17 11.5 28.5T480-360Zm-280-40h160q0-50 35-85t85-35q50 0 85 35t35 85h160v-360H200v360Z"/>
    </Icon>
  );
});

IconMaterialBottomAppBarFilled.displayName = 'OnesyIconMaterialBottomAppBarFilled';

export default IconMaterialBottomAppBarFilled;
