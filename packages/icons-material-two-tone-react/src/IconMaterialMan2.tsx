import React from 'react';

import { Icon, IIcon } from '@onesy/ui-react';

const IconMaterialMan2 = React.forwardRef((props: IIcon, ref) => {

  return (
    <Icon
      ref={ref}

      name='Man2'

      short_name='Man2'

      viewBox='0 0 24 24'

      {...props}
    >
      <g><rect fill="none" height="24" width="24"/></g><g><g><path d="M14,7h-4C8.9,7,8,7.9,8,9v6h2.5v7h3v-7H16V9C16,7.9,15.1,7,14,7z"/><circle cx="12" cy="4" r="2"/></g></g>
    </Icon>
  );
});

IconMaterialMan2.displayName = 'OnesyIconMaterialMan2';

export default IconMaterialMan2;
