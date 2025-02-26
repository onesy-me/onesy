import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMenu = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Menu'

      short_name='Menu'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </Icon>
  );
});

IconMaterialMenu.displayName = 'OnesyIconMaterialMenu';

export default IconMaterialMenu;
