import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDockToRight = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='DockToRight'

      short_name='DockToRight'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M200-200h120v-560H200v560Zm200 0h360v-560H400v560Zm-80 0H200h120Zm-200 80v-720h720v720H120Z"/>
    </Icon>
  );
});

IconMaterialDockToRight.displayName = 'OnesyIconMaterialDockToRight';

export default IconMaterialDockToRight;
