import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialRemoveFromQueue = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='RemoveFromQueue'

      short_name='RemoveFromQueue'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 17h18V5H3v12zm5-7h8v2H8v-2z" opacity=".3"/><path d="M21 3H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.11-.9-2-2-2zm0 14H3V5h18v12zM8 10h8v2H8z"/>
    </Icon>
  );
});

IconMaterialRemoveFromQueue.displayName = 'OnesyIconMaterialRemoveFromQueue';

export default IconMaterialRemoveFromQueue;
