import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialFilter2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Filter2'

      short_name='Filter2'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M7 17h14V3H7v14zm4-6c0-1.11.9-2 2-2h2V7h-4V5h4c1.1 0 2 .89 2 2v2c0 1.11-.9 2-2 2h-2v2h4v2h-6v-4z" opacity=".3"/><path d="M17 13h-4v-2h2c1.1 0 2-.89 2-2V7c0-1.11-.9-2-2-2h-4v2h4v2h-2c-1.1 0-2 .89-2 2v4h6v-2zm4-12H7c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 16H7V3h14v14zM1 21c0 1.1.9 2 2 2h16v-2H3V5H1v16z"/>
    </Icon>
  );
});

IconMaterialFilter2.displayName = 'OnesyIconMaterialFilter2';

export default IconMaterialFilter2;
