import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialCallSplit = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='CallSplit'

      short_name='CallSplit'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M20 4h-6l2.29 2.29-2.88 2.88 1.42 1.42 2.88-2.88L20 10zM4 4v6l2.29-2.29 4.71 4.7V20h2v-8.41l-5.29-5.3L10 4z"/>
    </Icon>
  );
});

IconMaterialCallSplit.displayName = 'OnesyIconMaterialCallSplit';

export default IconMaterialCallSplit;
