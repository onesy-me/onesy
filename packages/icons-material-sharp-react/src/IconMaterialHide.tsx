import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialHide = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Hide'

      short_name='Hide'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="m177-120-57-57 184-183H200v-80h240v240h-80v-104L177-120Zm343-400v-240h80v104l183-184 57 57-184 183h104v80H520Z"/>
    </Icon>
  );
});

IconMaterialHide.displayName = 'OnesyIconMaterialHide';

export default IconMaterialHide;
