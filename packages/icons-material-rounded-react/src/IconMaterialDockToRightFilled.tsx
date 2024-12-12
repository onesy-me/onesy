import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToRightFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToRightFilled'

      short_name='DockToRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm200-80h360v-560H400v560Z"/>
    </Icon>
  );
});

IconMaterialDockToRightFilled.displayName = 'OnesyIconMaterialDockToRightFilled';

export default IconMaterialDockToRightFilled;
