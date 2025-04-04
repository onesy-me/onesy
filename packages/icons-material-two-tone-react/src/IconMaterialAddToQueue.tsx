import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialAddToQueue = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='AddToQueue'

      short_name='AddToQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17h18V5H3v12zm5-7h3V7h2v3h3v2h-3v3h-2v-3H8v-2z" opacity=".3"/><path d="M11 15h2v-3h3v-2h-3V7h-2v3H8v2h3zM21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H3V5h18v12z"/>
    </Icon>
  );
});

IconMaterialAddToQueue.displayName = 'OnesyIconMaterialAddToQueue';

export default IconMaterialAddToQueue;
