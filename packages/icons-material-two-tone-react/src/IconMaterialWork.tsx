import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialWork = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Work'

      short_name='Work'

      viewBox='0 0 24 24'

      {...props}
    >
      <path d="M0 0h24v24H0V0z" fill="none"/><path d="M4 8h16v11H4z" opacity=".3"/><path d="M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zM10 4h4v2h-4V4zm10 15H4V8h16v11z"/>
    </Icon>
  );
});

IconMaterialWork.displayName = 'OnesyIconMaterialWork';

export default IconMaterialWork;
