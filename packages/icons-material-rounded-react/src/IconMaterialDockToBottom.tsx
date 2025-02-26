import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToBottom = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToBottom'

      short_name='DockToBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h560q33 0 56.5 23.5T840-760v560q0 33-23.5 56.5T760-120H200Zm0-200v120h560v-120H200Zm0-80h560v-360H200v360Zm0 80v120-120Z"/>
    </Icon>
  );
});

IconMaterialDockToBottom.displayName = 'OnesyIconMaterialDockToBottom';

export default IconMaterialDockToBottom;
