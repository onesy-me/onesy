import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToBottomFilled = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToBottomFilled'

      short_name='DockToBottom'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-400h560v-360H200v360Zm-80 280v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToBottomFilled.displayName = 'OnesyIconMaterialDockToBottomFilled';

export default IconMaterialDockToBottomFilled;
