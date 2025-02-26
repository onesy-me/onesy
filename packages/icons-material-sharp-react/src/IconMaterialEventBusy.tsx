import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialEventBusy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='EventBusy'

      short_name='EventBusy'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m388-212-56-56 92-92-92-92 56-56 92 92 92-92 56 56-92 92 92 92-56 56-92-92-92 92ZM120-80v-720h120v-80h80v80h320v-80h80v80h120v720H120Zm80-80h560v-400H200v400Zm0-480h560v-80H200v80Zm0 0v-80 80Z"/>
    </Icon>
  );
});

IconMaterialEventBusy.displayName = 'OnesyIconMaterialEventBusy';

export default IconMaterialEventBusy;
