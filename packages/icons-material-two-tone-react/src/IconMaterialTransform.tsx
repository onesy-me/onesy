import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialTransform = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Transform'

      short_name='Transform'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M8 4h2L7 1 4 4h2v2H2v2h4v8c0 1.1.9 2 2 2h8v2h-2l3 3 3-3h-2v-2h4v-2H8V4zm10 10V8c0-1.1-.9-2-2-2h-6v2h6v6h2z"/>
    </Icon>
  );
});

IconMaterialTransform.displayName = 'OnesyIconMaterialTransform';

export default IconMaterialTransform;
