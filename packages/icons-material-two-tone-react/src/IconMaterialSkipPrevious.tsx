import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialSkipPrevious = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='SkipPrevious'

      short_name='SkipPrevious'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M16 14.14V9.86L12.97 12z" opacity=".3"/><path d="M6 6h2v12H6zm12 12V6l-8.5 6 8.5 6zm-2-3.86L12.97 12 16 9.86v4.28z"/>
    </Icon>
  );
});

IconMaterialSkipPrevious.displayName = 'OnesyIconMaterialSkipPrevious';

export default IconMaterialSkipPrevious;
