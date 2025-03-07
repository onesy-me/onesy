import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialContentCopy = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='ContentCopy'

      short_name='ContentCopy'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 7h11v14H8z" opacity=".3"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/>
    </Icon>
  );
});

IconMaterialContentCopy.displayName = 'OnesyIconMaterialContentCopy';

export default IconMaterialContentCopy;
