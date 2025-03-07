import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTextRotationNone = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='TextRotationNone'

      short_name='TextRotationNone'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M21 18l-3-3v2H5v2h13v2l3-3zM9.5 11.8h5l.9 2.2h2.1L12.75 3h-1.5L6.5 14h2.1l.9-2.2zM12 4.98L13.87 10h-3.74L12 4.98z"/>
    </Icon>
  );
});

IconMaterialTextRotationNone.displayName = 'OnesyIconMaterialTextRotationNone';

export default IconMaterialTextRotationNone;
