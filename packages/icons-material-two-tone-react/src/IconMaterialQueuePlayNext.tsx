import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialQueuePlayNext = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='QueuePlayNext'

      short_name='QueuePlayNext'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M13 15v-3h3v-2h-3V7h-2v3H8v2h3v3zm5 0l3 3-3 3 1.5 1.5L24 18l-4.5-4.5zM8 19v2h8v-2h2v-2H3V5h18v8h2V5c0-1.11-.9-2-2-2H3c-1.11 0-2 .89-2 2v12c0 1.1.89 2 2 2h5z"/>
    </Icon>
  );
});

IconMaterialQueuePlayNext.displayName = 'OnesyIconMaterialQueuePlayNext';

export default IconMaterialQueuePlayNext;
