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
      <path d="M200-200h560v-120H200v120Zm0-200h560v-360H200v360Zm0 80v120-120Zm-80 200v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToBottom.displayName = 'OnesyIconMaterialDockToBottom';

export default IconMaterialDockToBottom;
