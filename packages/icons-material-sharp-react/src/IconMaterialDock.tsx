import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialDock = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Dock'

      short_name='Dock'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M320-40v-80h320v80H320Zm-80-160v-720h480v720H240Zm80-120v40h320v-40H320Zm0-80h320v-320H320v320Zm0-400h320v-40H320v40Zm0 0v-40 40Zm0 480v40-40Z"/>
    </Icon>
  );
});

IconMaterialDock.displayName = 'OnesyIconMaterialDock';

export default IconMaterialDock;
