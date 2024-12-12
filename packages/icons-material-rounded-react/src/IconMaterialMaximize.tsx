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
      <path d="M200-760q-17 0-28.5-11.5T160-800q0-17 11.5-28.5T200-840h560q17 0 28.5 11.5T800-800q0 17-11.5 28.5T760-760H200Z"/>
    </Icon>
  );
});

IconMaterialMaximize.displayName = 'OnesyIconMaterialMaximize';

export default IconMaterialMaximize;
