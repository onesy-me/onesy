import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFlip = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Flip'

      short_name='Flip'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M19 7h2v2h-2zm0 14c1.1 0 2-.9 2-2h-2v2zm0-6h2v2h-2zm0-4h2v2h-2zM9 5V3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h4v-2H5V5h4zm10-2v2h2c0-1.1-.9-2-2-2zm-8-2h2v22h-2zm4 2h2v2h-2zm0 16h2v2h-2z"/>
    </Icon>
  );
});

IconMaterialFlip.displayName = 'OnesyIconMaterialFlip';

export default IconMaterialFlip;
