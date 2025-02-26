import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMaximize = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Maximize'

      short_name='Maximize'

      viewBox='0 -960 960 960'

      {...props}
    >
      <path d="M160-760v-80h640v80H160Z"/>
    </Icon>
  );
});

IconMaterialMaximize.displayName = 'OnesyIconMaterialMaximize';

export default IconMaterialMaximize;
